import React, { Component } from 'react';
import {
  Table, TableBody, TableHead, TableRow, TableSortLabel, TableCell, TablePagination,
  Tooltip, withStyles, IconButton, Checkbox, Input, FormControl, MenuItem, Select, InputLabel, ListItemText, Link
} from '@material-ui/core';
import PropTypes from 'prop-types';
import moment from 'moment';
import { I18n } from 'react-redux-i18n';
import { DebounceInput } from 'react-debounce-input';
import Features from '../../../constants/featureConfig';

const styles = () => ({
  rowHover: {
    '&:hover': {
      backgroundColor: '#F3F3F3'
    }
  },
  headingStyle: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  noBorder: { border: 'none' }
});

class DataTable extends Component {
  constructor(props) {
    super(props);

    const defaultPaginationOptions = { rowsArray: [5, 10, 25], page: 0, rowsPerPage: 10 };

    this.state = {
      columns: props.columns.map(x => {
        if (!x.formatter) {
          x.formatter = y => y;
        }

        return x;
      }),
      allSelected: false,
      selected: [],
      order: props.order,
      orderBy: props.orderBy,
      paginationOptions: props.paginationOptions ? props.paginationOptions : defaultPaginationOptions,
      searchText: '',
      data: props.data,
      showFilterHeaderRow: false,
      stateOfDropdown: {},
      searchFieldCSS: props.searchFieldCSS,
      emptySearch: false
    };
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
      this.setState({
        selected: [],
        allSelected: false,
        data: this.props.data,
        columns: this.props.columns.map(x => {
          if (!x.formatter) {
            x.formatter = y => y;
          }

          return x;
        })
      });
    }
  }

  handleToggleCheckAll = () => {
    const allSelected = !this.state.allSelected;

    let selected = [];

    if (allSelected) {
      selected = this.props.data.map(x => x[this.props.dataKey]);
    }

    this.setState({
      allSelected,
      selected
    });

    this.props.onSelectionChange(selected);
  }

  handleToggleCheck = id => {
    const selected = this.state.selected;

    if (selected.includes(id)) {
      selected.splice(selected.indexOf(id), 1);
    }
    else {
      selected.push(id);
    }

    this.setState({
      selected,
      allSelected: (selected.length > 0 && selected.length === this.props.data.length)
    });

    this.props.onSelectionChange(selected);
  }

  handleRequestSort = property => {
    const orderBy = property;

    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  }

  renderTableHead = () => (
    <TableHead>
      {/* <FilterList onClick={() => this.handleFilterShowClick()} /> */}
      <TableRow>
        {
          this.props.checkbox &&
          <TableCell className='data-table-checkbox'>
            <Checkbox
              onChange={this.handleToggleCheckAll}
              checked={this.state.allSelected}
            />
          </TableCell>
        }
        {
          this.props.columns.map(column => {
            if (column.type === 'actions') {
              return (
                <TableCell className='data-table-action' colSpan={column.actions.length} key={column.name}>
                  {column.name}
                </TableCell>);
            }

            return (
              <TableCell
                key={column.selector}
                sortDirection={this.state.orderBy === column.selector && this.state.order}
              >
                <TableSortLabel
                  active={this.state.orderBy === column.selector}
                  direction={this.state.order}
                  onClick={() => this.handleRequestSort(column.selector)}
                >
                  {column.name}
                </TableSortLabel>
              </TableCell>);
          })
        }
      </TableRow>
    </TableHead>
  );

  handleChangePage = (event, page) => {
    const paginationOptionsCopy = { ...this.state.paginationOptions };

    paginationOptionsCopy.page = page;
    this.setState({ paginationOptions: paginationOptionsCopy });
  };

  handleChangeRowsPerPage = rowsPerPage => {
    const paginationOptionsCopy = { ...this.state.paginationOptions };

    paginationOptionsCopy.rowsPerPage = rowsPerPage.target.value;
    this.setState({ paginationOptions: paginationOptionsCopy });
  }

  handleSearch = event => {
    this.setState({ searchText: event.target.value });
    const query = event.target.value;

    const dataArray = [];

    if (query !== '') {
      this.props.data.filter(element => {
        let flag = false;

        this.state.columns.map(column => {
          if (column.selector && column.type === 'string' && column.formatter(element[column.selector]).props.children.toString().toLowerCase().includes(query.toLowerCase())) {
            if (flag === false) {
              dataArray.push(element);
            }

            flag = true;
          }

          if (column.selector && column.type !== 'date' && column.type !== 'string' && element[column.selector] && element[column.selector].toString().toLowerCase().includes(query.toLowerCase())) {
            if (flag === false) {
              dataArray.push(element);
            }

            flag = true;
          }

          // For Date
          if (column.selector && column.type === 'date' && column.formatter(moment(element[column.selector]).format('L[,] LT')).toLowerCase().includes(query.toLowerCase())) {
            if (flag === false) {
              dataArray.push(element);
            }

            flag = true;
          }
        });
      });

      if (dataArray.length === 0) {
        this.setState({ data: dataArray, emptySearch: true });
      } else {
        this.setState({ data: dataArray, emptySearch: false });
      }
    }

    if (query === '') {
      this.setState({ data: this.props.data, emptySearch: false });
    }
  }

  disablingActionItems = (col, row, rowKey) => {
    if (this.state.selected && this.state.selected.length > 0) {
      return true;
    }

    if (col.actionsToDisable) {
      return col.actionsToDisable.includes(row[rowKey]);
    }

    return false;
  };

  renderRows = () => {
    const { classes, columns, data, dataKey, pagination } = this.props;
    const { order, orderBy, paginationOptions } = this.state;
    const { page, rowsPerPage } = paginationOptions;

    return (
      <TableBody>
        {
          (
            pagination ?
              stableSort(this.state.data, getSorting(order, orderBy, columns))
                .slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
                .map(row => this.renderRow(row, dataKey, classes))
              :
              stableSort(data, getSorting(order, orderBy, columns))
                .map(row => this.renderRow(row, dataKey, classes))
          )
        }
      </TableBody>
    );
  }

  renderPagination = () => {
    const { data, pagination } = this.props;
    const { paginationOptions } = this.state;

    return pagination && (
      <TablePagination
        rowsPerPageOptions={paginationOptions.rowsArray}
        component="div"
        count={data.length}
        rowsPerPage={paginationOptions.rowsPerPage}
        page={paginationOptions.page}
        onChangePage={this.handleChangePage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    );
  }

  renderSearch = () => {
    return (

      <DebounceInput
        placeholder={I18n.t('MISC.SEARCH')}
        variant="outlined"
        debounceTimeout={500}
        value={this.state.searchText}
        onChange={this.handleSearch}
        style={this.props.searchFieldCSS}
        className="DebounceInput"
      />

    );
  }

  handleValueSelection = (value, selectedColumn) => {
    const dropdownState = { ...this.state.stateOfDropdown };
    const col = selectedColumn;

    if (dropdownState[col]) {
      let arr = [];

      arr = dropdownState[col]; //wf
      arr.push(value);
    } else {
      dropdownState[col] = value;
    }

    this.setState({ stateOfDropdown: dropdownState });
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  renderFilterHead = () => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: (ITEM_HEIGHT * 4.5) + ITEM_PADDING_TOP,
          width: 250
        }
      }
    };

    return (
      this.state.showFilterHeaderRow &&
      <TableRow>
        <TableCell className='data-table-checkbox'>
          <Checkbox disabled />
        </TableCell>
        {
          this.props.columns.map(column => {
            return (column.selector ?
              <TableCell className='data-table-action' key={column.name}>
                <FormControl >
                  <InputLabel htmlFor="select-multiple-checkbox"></InputLabel>
                  <Select
                    multiple
                    value={[this.state.stateOfDropdown[column.selector]]}
                    onChange={this.handleChange}
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {this.state.data && this.state.data.map(item => {
                      return <MenuItem key={item._id} value={item[column.selector]}>
                        <Checkbox checked={this.state.data.indexOf(item[column.selector]) > -1} value={item[column.selector]} color="primary"
                          onClick={e => this.handleValueSelection(e.target.value, column.selector)} />
                        <ListItemText primary={item[column.selector]}> {item[column.selector]}</ListItemText>
                      </MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </TableCell>
              : column.actions.map(ele => { return <TableCell key={ele.name} />; }));
          })

        }
      </TableRow>
    );
  }

  clearSearchText = () => {
    this.setState({ searchText: '', emptySearch: false, data: this.props.data });
  }

  renderEmptySearchRow = () => {
    return (
      <div>
        {I18n.t('MISC.NO_RESULT_FOUND')}
        <Link onClick={this.clearSearchText} >
          {I18n.t('MISC.CLEAR_SEARCH_FILTERS')}
        </Link>
      </div>
    );
  }

  render = () => {
    return (
      <>
        <div className={this.props.heightClass} style={{ overflowY: 'auto' }}>
          {
            Features.SEARCH &&
            this.renderSearch()
          }
          <Table>
            {this.renderTableHead()}
            {this.renderFilterHead()}
            {this.renderRows()}
          </Table>
          {
            this.state.emptySearch &&
            this.renderEmptySearchRow()
          }
        </div>
        {this.renderPagination()}
      </>
    );
  }

  renderRow = (row, rowKey, classes) => (

    <TableRow key={row[rowKey]} className={classes.rowHover} onClick={() => this.props.checkbox && this.handleToggleCheck(row[rowKey])}>
      {this.props.checkbox &&
        <TableCell className='data-table-checkbox'>
          <Checkbox checked={this.state.selected.includes(row[rowKey])} />
        </TableCell>}

      {this.state.columns.map(column => {
        if (column.type !== 'actions') {
          if (column.type === 'date') {
            return (
              <Tooltip disableFocusListener={true} title={moment(row[column.selector]).format('YYYY-MM-DD HH:mm:ss.SSS')}>
                <TableCell key={column.selector}>
                  {column.formatter(moment(row[column.selector]).format('L[,] LT'))}
                </TableCell>
              </Tooltip>);
          }

          return (
            <TableCell key={column.selector}>
              {column.formatter(row[column.selector])}
            </TableCell>);
        }

        return column.actions.map(col => (
          <TableCell className='data-table-action' key={col.name} style={{ marginLeft: '5px' }}>
            <Tooltip disableFocusListener={true} title={col.name}>
              <IconButton onClick={e => col.handler(e, row[rowKey])} disabled={this.disablingActionItems(col, row, rowKey)}>
                {col.icon}
              </IconButton>
            </Tooltip>
          </TableCell>)
        );
      })}
    </TableRow>
  )
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  dataKey: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  checkbox: PropTypes.bool,
  heightClass: PropTypes.string,
  pagination: PropTypes.bool,
  paginationOptions: PropTypes.object,
  onSelectionChange: PropTypes.func,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  classes: PropTypes.object,
  searchBar: PropTypes.bool,
  searchFieldCSS: PropTypes.string
};

export default (withStyles(styles))(DataTable);

const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);

    if (order !== 0) { return order; }

    return a[1] - b[1];
  });

  return stabilizedThis.map(el => el[0]);
};

const getSorting = (order, orderBy, columns) => {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy, columns) : (a, b) => -desc(a, b, orderBy, columns);
};

const desc = (a, b, orderBy, columns) => {
  let isDate = false;

  columns.map(column => {
    if (column.selector === orderBy) {
      if (column.type === 'date') {
        isDate = true;
      }
    }
  });

  if (isDate) {
    if (Math.sign((new Date(a[orderBy])) < (new Date(b[orderBy])))) {
      return 1;
    }

    if (Math.sign((new Date(a[orderBy])) > (new Date(b[orderBy])))) {
      return -1;
    }

    return 0;
  }

  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
};