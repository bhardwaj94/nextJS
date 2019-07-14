const en = {
  APPLICATION: {
    TITLE: 'protofy'
  },
  LANG: {
    LABEL: 'Language',
    ENGLISH: 'English',
    FRENCH: 'French',
    GERMAN: 'German',
    'en-US': 'English',
    'fr-FR': 'French',
    'de-DE': 'German',
    MIN: {
      'en-US': 'EN',
      'fr-FR': 'FR',
      'de-DE': 'DE'
    }
  },
  NAVBAR: {
    EXECUTION: 'Execution',
    TEST_EXECUTION: 'Test Execution',
    RUN_HISTORY: 'Run History',
    TEST_PLANS: 'Test Plans',
    REPOSITORY: 'Repository',
    UTTERANCES: 'Utterances',
    DASHBOARD: 'Dashboard',
    CONNECTIONS: 'Connections',
    USERS: 'Users',
    PROJECT: 'Project',
    ADMINISTRATION: 'Administration',
    SETTINGS: 'Settings',
    IMPORT_EXPORT: 'Import/Export'
  },
  CONNECTIONS: {
    COLUMNS: {
      PLATFORM: 'Platform',
      STATUS: 'Status',
      ACTIONS: 'Actions',
      TITLE: 'Title',
      EXECUTE: '',
      LAST_RESULT: 'Last Result',
      CREATED: 'Created',
      MODIFIED: 'Modified',
      LANGUAGE: 'Connection Language',
      CONFIGURATION: 'Connection Configuration'
    },
    NOTIFIER: {
      SUCCESS_CONNECTION_SAVED: 'Connection saved successfully',
      ERROR_CONNECTION: 'Error occurred while saving connection',
      ERROR_CONNECTION_DATA_NOT_FOUND: 'Error occurred while fetching connection details',
      SUCCESS_CONNECTION_DELETED: 'Connection(s) deleted successfully',
      ERROR_CONNECTION_DELETE: 'Error occurred while deleting connection',
      ERROR_EXECUTE: 'Error occurred while executing connection',
      SUCCESS_TEST_SUCCESS: 'Connection tested successfully',
      NO_CONNECTION_SELECTED: 'No active connection',
      ACTIVE_CONNECTION: 'Active connection',
      SUCCESS_TEST_FAILURE: 'Connection failed'
    },
    TOOLTIP: {
      EDIT_CONNECTION: 'Edit Connection',
      DELETE_CONNECTION: 'Delete Connection'
    },
    DIALOG: {
      TITLE: {
        NEW: 'Add Connection',
        EDIT_VIEW: 'Edit Connection',
        CONNECTION_NOT_FOUND: 'Connection not found'
      },
      INPUT: {
        TITLE: {
          LABEL: 'Name',
          PLACEHOLDER: 'Enter Name of Connection... '
        },
        CONNECTION: {
          LABEL: 'Connection',
          PLACEHOLDER: 'Add Connection...'
        }
      },
      VALIDATION: {
        TITLE_REQUIRED: 'Name is required',
        TITLE_CONSTRAINT: 'Name can only contain letters, numbers & _ (underscore).',
        UTTERANCE: {
          REQUIRED: 'Connection is required'
        }
      },
      SAVE: 'Save',
      CANCEL: 'Cancel'
    },
    DELETE_DIALOG_CONTENT: 'This will delete the connections permanently. Are you sure?',
    ADD_CONNECTION: 'Add new connection',
    DELETE_SELECTED_CONNECTIONS: 'Delete selected connections',
    SELECT_PLATFORM: 'Select Platform',
    CONNECTION_NAME: 'Connection Name',
    SAVE: 'Save',
    CANCEL: 'Cancel',
    TEST_CONNECTION: 'Test Connection',
    PARAMETERS: {
      BOTIFY_KIT_URL: 'Instance URL',
      BOTIFY_KIT_LANG: 'Target Language',
      SCRIPTING_MATCHING_MODE: 'Response Acceptance',
      BACK_OFFICE_URL: 'Back Office URL',
      WATSON_USER: 'Username',
      WATSON_PASSWORD: 'Password',
      WATSON_WORKSPACE_ID: 'Workspace ID',
      WATSON_USE_INTENT: 'Match Intent',
      VALUES: {
        exactMatch: 'Exact match',
        includeLowerCase: 'Partial match, ignoring case',
        include: 'Partial match'
      }
    },
    LEFT_BLANK: 'cannot be left blank'
  },
  TEST_CASES: {
    COLUMNS: {
      TITLE: 'Name',
      EXECUTE: '',
      LAST_RESULT: 'Last Result',
      CREATED: 'Created',
      ACTIONS: '',
      MODIFIED: 'Modified'
    },
    DIALOG: {
      TITLE: {
        NEW: 'New Test Case',
        EDIT_VIEW: 'Edit Test Case'
      },
      INPUT: {
        TITLE: {
          LABEL: 'Name',
          PLACEHOLDER: 'Type here...'
        },
        SCRIPT: {
          LABEL: 'Script',
          PLACEHOLDER: '#me\nEnter what user says.\n\n#bot\nEnter what bot says.'
        }
      },
      VALIDATION: {
        TITLE_REQUIRED: 'Name is required',
        TITLE_CONSTRAINT: 'Name can not contain ^<>:;,?"*|\\/',
        EXECUTION: {
          TEST_CASE_SKIPPED: 'Execution is skipped due to active connection language and selected language mismatch'
        },
        SCRIPT: {
          REQUIRED: 'Script is required',
          SCRIPT_FORMAT: {
            ME: 'Please enter at least one #me in script',
            BOT: 'Please enter at least one #bot in script',
            ME_NEW_LINE: 'Please enter new line after each #me in script',
            BOT_NEW_LINE: 'Please enter new line after each #bot in script'
          }
        }
      },
      SAVE: 'Save',
      CANCEL: 'Cancel'
    },
    RECORD_DIALOG: {
      TITLE: {
        NEW: 'Record New Test Case',
        EDIT_VIEW: 'Edit Test Case'
      },
      INPUT: {
        MESSAGE: {
          PLACEHOLDER: 'Type a message...'
        },
        PATH: {
          LABEL: 'Test case name',
          PLACEHOLDER: 'Path'
        }
      },
      VALIDATION: {
        TITLE_REQUIRED: 'Name is required',
        TITLE_CONSTRAINT: 'Name can not contain ^<>:;,?"*|\\/',
        SCRIPT: {
          REQUIRED: 'No chat is available',
          SCRIPT_FORMAT: {
            ME: 'Please enter at least one #me in script',
            BOT: 'Please enter at least one #bot in script'
          }
        }
      },
      TOOLTIP: {
        START_CHAT: 'Start Chat',
        SEND_MESSAGE: 'Send',
        CLEAR_CHAT: 'Clear'
      },
      SAVE: 'Save',
      CANCEL: 'Cancel'
    },
    TOOLTIP: {
      ADD_CASE: 'Add Test Case',
      RECORD_CASE: 'Record Test Case',
      MOVE_CASE: 'Move Test Cases',
      COPY_CASE: 'Copy Test Cases',
      DELETE_CASE: 'Delete Test Cases',
      EXPORT_CASE: 'Export Test Cases',
      SORT_BY: 'Sort by',
      RUN: 'Run',
      EDIT_CASE: 'Edit Test Case',
      DELETE_CASE_SINGLE: 'Delete Test Cases',
      SELECT_LANGUAGE: 'Select Test Cases Display Language'
    },
    DELETE_DIALOG_TITLE: 'Warning',
    DELETE_DIALOG_CONTENT: 'This will delete the  selected test case(s) permanently. Are you sure?',
    NOTIFIER: {
      SUCCESS_TEST_CASE_SAVED: 'Test case saved successfully',
      ERROR_TEST_CASE: 'Error occurred while saving test case',
      ERROR_TEST_CASE_DATA_NOT_FOUND: 'Error occurred while fetching test case details',
      SUCCESS_TEST_CASE_DELETED: 'Test case deleted successfully',
      ERROR_TEST_CASE_DELETE: 'Error occurred while deleting test case',
      ERROR_EXECUTE: 'Error occurred while executing test case',
      SUCCESS_CASES_MOVE: 'Test cases moved successfully',
      ERROR_CASES_MOVE: 'Error occurred while moving test cases',
      SUCCESS_CASES_COPY: 'Test cases copied successfully',
      ERROR_CASES_COPY: 'Error occurred while copy test cases'
    }
  },
  TEST_PLAN: {
    CREATE_PLAN: 'Create Plan',
    RENAME_PLAN: 'Rename Plan',
    DELETE_PLAN: 'Delete Plan',
    TEST_CASES: 'Test Cases',
    PLAN_DETAILS: 'Plan Details',
    SELECT_PLAN: 'Select Plan',
    DIALOG: {
      CREATE_PLAN: 'Create Plan',
      RENAME_PLAN: 'Rename Plan',
      PLAN_NAME: 'Plan Name',
      PLAN_VALIDATION: 'Plan name is required',
      TITLE: 'Warning',
      CONTENT: 'This will delete the Plan and its contents and their instances permanently. Are you sure?',
      PLAN_NAME_CONSTRAINT: 'Plan name can not contain ^<>:;,?"*|\\/',
      MOVE_DIALOG_TITLE: 'Select Destination Plan',
      PARENT_PLAN: 'Parent Plan',
      PLAN_NAME_WORD_CONSTRAINT: 'Plan name should contain at least one word or character'
    },
    NOTIFIER: {
      ERROR_GET_TEST_PLAN: 'Error occurred while fetching test plan details',
      ERROR_ADD_TEST_PLAN: 'Error occurred while saving test plan',
      ERROR_DELETE_TEST_PLAN: 'Error occurred while deleting test plan',
      ERROR_EDIT_TEST_PLAN: 'Error occurred while editing test plan',
      SUCCESS_ADD_TEST_PLAN: 'Test plan saved successfully',
      SUCCESS_EDIT_TEST_PLAN: 'Test plan modified successfully',
      SUCCESS_DELETE_TEST_PLAN: 'Test plan deleted successfully'
    }
  },
  ACTIONS: {
    SAVE: 'Save',
    CANCEL: 'Cancel',
    AGREE: 'Yes',
    DISAGREE: 'No',
    MOVE: 'Move',
    COPY: 'Copy',
    CONTINUE: 'Continue',
    INFO_AGREE: 'Ok'
  },
  ERROR_CODE: {
    UNKNOWN_ERROR: 'Unknown Error',
    UNAUTHORIZED: 'Unauthorized',
    DIRECTORY_NOT_FOUND: 'Directory not found',
    DUPLICATE_DIRECTORY: 'Directory already exists ',
    TEST_CASE_DELETION_UNSUCCESSFUL: 'Test case deletion unsuccessful',
    SOURCE_DIRECTORY_NOT_FOUND: 'Source directory not found',
    TEST_CASE_UPDATE_FAILED: 'Test cases update failed',
    COPYING_DIRECTORY_FAILED: 'Directory copying failed',
    FILE_ALREADY_EXISTS: 'File already exists',
    TEST_CASE_NOT_FOUND: 'Test case has been deleted',
    EXECUTION_FAILED: 'Execution Error',
    MAX_DEPTH_REACHED: 'No more test plans can be created in this test plan',
    MAX_TEST_CASES: 'No more test cases can be created in this test plan',
    TEST_INSTANCE_TITLE_ALREADY_EXIST: 'Test instance already exist',
    TEST_INSTANCE_DELETION_UNSUCCESSFUL: 'Test instance deletion failed',
    TEST_SET_NAME_ALREADY_EXISTS: 'Test set name already exist',
    ROOT_ALREADY_EXISTS: 'Root already exists.',
    ROOT_NOT_FOUND: 'Root not found.',
    CONTAINER_ALREADY_EXISTS: 'Set Container already exist',
    CONTAINER_OLD_PARENT_NOT_FOUND: 'SetContainer Old Parent not Found',
    CONTAINER_NEW_PARENT_NOT_FOUND: 'SetContainer New Parent not Found',
    CONTAINER_NOT_FOUND: 'Selected SetContainer Not Found',
    CONTAINER_DELETION_FAILED: 'Container deletion Failed',
    CONNECTIONS_NOT_FOUND: 'Connection not found',
    CONNECTION_NAME_ALREADY_EXISTS: 'Connection name already exists',
    CONNECTION_DELETION_UNSUCCESSFUL: 'Connection deletion unsuccessful',
    SESSION_EXPIRED: 'Session expired. Refresh to continue.',
    PROJECTS_NOT_FOUND: 'Projects not found',
    NO_UTTERANCE_FOUND: 'No utterance found',
    INVALID_DETAILS_FOR_SMTP: 'Unable to send test email! Please verify your SMTP Configurations.',
    UTTERANCE_ALREADY_EXISTS: 'Utterance already exists',
    UTTERANCE_ALREADY_MAPPED_UPDATE_FAILED: 'Utterance(s) can\'t be modified',
    NO_INSTANCE_ADDED: 'No instances were added',
    CONNECTION_NOT_FOUND: 'Connection does not exist anymore.',
    BOT_DOWN: 'Bot is not Ready for Import',
    PLAN_NOT_CREATED: 'Plan was not created. Please check your connection details.',
    TEST_CASE_UPDATE_FAILED_REFERRED: 'Test case update failed. Referred in other test case.',
    TEST_CASE_DELETE_FAILED_REFERRED: 'Test case deletion failed. Referred in other test case.',
    TEST_CASES_FEW_NOT_DELETED: 'Few test case not deleted. Referred in other test case.',
    CASE_NOT_FOUND: 'The case included is not found',
    USER_EMAIL_NOT_EXISTS: 'No email address found for the current user',
    FAILED_TO_CONNECT_WITH_BOT: 'Failed to connect with bot',
    BOT_NOT_RESPONDING: 'Bot is not responding',
    UNSUPPORTED_MESSAGE_FORMAT: 'Unsupported message format',
    CONVERSATION_ENDED: 'Your chat session was idle for too long so it has been ended.'
  },
  TEST_EXECUTION: {
    EXECUTION_GRID: 'Execution Instances',
    EXECUTION_REPORT: 'Compare Results',
    LANGUAGE: 'Execution Using Connection Language:  ',
    COMPARE_LANGUAGE: 'Comparison Using Connection Language',
    COLUMNS: {
      RUN_ID: 'Run Id',
      STATUS: 'Status',
      TEST_CASE_INSTANCE: 'Test Case Instance',
      TEST_SET: 'Test Set',
      DURATION: 'Duration(sec)',
      LANGUAGE: 'Language',
      EXECUTION_STARTED: 'Execution Started'
    },
    NOTIFIER: {
      SUCCESS_ADD_TEST_SET_CONTAINER: 'Test set container saved successfully',
      SUCCESS_DELETE_TEST_SET_CONTAINER: 'Test set container deleted successfully',
      SUCCESS_EDIT_TEST_SET_CONTAINER: 'Test set container updated successfully',
      SUCCESS_ADD_TEST_SET: 'Test set saved successfully',
      SUCCESS_DELETE_TEST_SET: 'Test set deleted successfully',
      SUCCESS_EDIT_TEST_SET: 'Test set updated successfully',
      SUCCESS_DELETED_TEST_INSTANCE: 'Test instances deleted successfully',
      SUCCESS_ADD_TEST_INSTANCE: 'Test instances added successfully'
    },
    TOOLTIP: {
      ADD_CONTAINER: 'Add Test Set Container',
      ADD_SET: 'Add Test Set',
      ADD_INSTANCE: 'Add Instance',
      DELETE_INSTANCES: 'Delete Selected Instances',
      EXECUTE_INSTANCE: 'Execute Selected Instances',
      EXECUTE_ALL_INSTANCE: 'Execute All Instances',
      REORDER_TEST_CASE_INSTANCES: 'Reorder test case instances'
    },
    DIALOG: {
      DELETE_TITLE: 'Warning',
      DELETE_SET_CONTENT: 'This will delete the test set and its instances permanently. Are you sure?',
      DELETE_CONTAINER_CONTENT: 'This will delete the test set container and its sets and their instances permanently. Are you sure?',
      ADD_SET_TITLE: 'Add Test Set',
      ADD_CONTAINER_TITLE: 'Add Test Set Container',
      EDIT_SET_TITLE: 'Edit Test Set',
      EDIT_CONTAINER_TITLE: 'Edit Test Set Container',
      SELECT_CONTAINER: 'Select Parent Container',
      NAME_VALIDATION: 'Name is required',
      NAME_CONSTRAINT: 'Name can not contain ^<>:;,?"*|\\/',
      NAME_WORD_CONSTRAINT: 'Name should contain at least one word or character',
      TEST_CASE_INSTANCES: 'Test Case Instances'
    },
    INSTANCES: {
      DELETE_DIALOG_CONTENT: 'This will delete the test instances permanently. Are you sure?',
      ID: 'Test Instance Id',
      TITLE: 'Title',
      ORIGIN: 'Origin',
      ADD_TEST_CASES: 'Add Test Cases',
      DETAIL: 'Test Instance Detail',
      CREATED: 'Created',
      SEQUENCE: 'Execution Sequence'
    },
    REORDER_DIALOG: {
      SEQUENCE_SAVED_SUCCESSFULLY: 'The Execution sequence has been updated successfully.',
      ORDER_TEST_CASE_INSTANCE_DIALOG: 'Order Test Case Instances',
      CASES_SELECTION_CONSTRAINT: 'Please select at least one test case'
    }
  },
  UTTERANCES: {
    COLUMNS: {
      TITLE: 'Name',
      EXECUTE: '',
      LAST_RESULT: 'Last Result',
      CREATED: 'Created',
      ACTIONS: '',
      MODIFIED: 'Modified'
    },
    DIALOG: {
      TITLE: {
        NEW: 'New Utterance',
        EDIT_VIEW: 'Edit Utterance'
      },
      INPUT: {
        TITLE: {
          LABEL: 'Name',
          PLACEHOLDER: 'Enter Name of Utterance... '
        },
        UTTERANCE: {
          LABEL: 'Utterances',
          PLACEHOLDER: 'Add Utterance...'
        }
      },
      VALIDATION: {
        TITLE_REQUIRED: 'Name is required',
        TITLE_CONSTRAINT: 'Name can not contain ^<>:;,?"*|\\/',
        UTTERANCE: {
          REQUIRED: 'Utterance is required'
        }
      },
      SAVE: 'Save',
      CANCEL: 'Cancel'
    },
    TOOLTIP: {
      ADD_UTTERANCE: 'Add New Utterance',
      DELETE_UTTERANCES: 'Delete Utterances',
      EXPORT_UTTERANCES: 'Export Utterances',
      SORT_BY: 'Sort by',
      EDIT_UTTERANCE: 'Edit Utterance',
      DELETE_UTTERANCE_SINGLE: 'Delete Utterance',
      SELECT_LANGUAGE: 'Select Utterances Display Language'
    },
    DELETE_DIALOG_TITLE: 'Warning',
    DELETE_DIALOG_CONTENT: 'This will delete the  selected utterance(s) permanently. Are you sure?',
    NOTIFIER: {
      SUCCESS_UTTERANCE_SAVED: 'Utterance saved successfully',
      ERROR_UTTERANCE: 'Error occurred while saving utterance',
      ERROR_UTTERANCE_DATA_NOT_FOUND: 'Error occurred while fetching utterance details',
      SUCCESS_UTTERANCE_DELETED: 'Utterance(s) deleted successfully',
      ERROR_UTTERANCE_DELETE: 'Error occurred while deleting utterance',
      ERROR_EXECUTE: 'Error occurred while executing utterance',
      REQUIRED_SELECTED_UTTERANCE: 'Select at least one utterance',
      SUCCESS_UTTERANCE_MAPPED_PARTIAL_DELETED: 'Few utterances will not be deleted as they are already in use'
    }
  },
  PROJECTS: {
    DIALOG: {
      TITLE: 'Project',
      SELECT_PROJECT: 'Select Project',
      PROJECT_VALIDATION: 'Project is required'
    }
  },
  MISC: {
    NAME: 'Name',
    EDIT: 'Edit',
    DELETE: 'Delete',
    VIEW: 'View',
    DELETE_TITLE: 'Warning',
    EXECUTE: 'Execute',
    CLOSE: 'Close',
    CANCEL: 'Cancel',
    SAVE: 'Save',
    CLEAR: 'Clear',
    ACTIONS: 'Actions',
    STATUS: 'Status',
    TITLE: 'Title',
    OK: 'Ok',
    SEARCH: 'Search',
    NO_RESULT_FOUND: 'No Result Found.',
    CLEAR_SEARCH_FILTERS: ' Clear Search Filters.',
    OVERWRITE_DIALOG_TITLE: 'Warning!',
    INFO_DIALOG_TITLE: 'Information!',
    INFO_DIALOG_CONTENT: 'Placeholder Scripts will be added in following languages: ',
    INFO_DIALOG_SHOW: 'Don\'t Show again',
    OVERWRITE_DIALOG_CONTENT: 'This has been modified by',
    OVERWRITE_DIALOG_CONTENT_CONFIRM: 'Do you want to overwrite?',
    EXECUTION_STATUS: {
      '0': 'NOT RUN',
      '1': 'QUEUED',
      '2': 'RUNNING',
      '3': 'PASSED',
      '4': 'FAILED',
      '5': 'ERROR'
    },
    WARNING: 'Warning',
    SESSION_CONTENT: 'Your session is about to expire.'
  },
  USER_MENU: {
    LOGOUT: 'Log out',
    PROFILE: 'Profile',
    ACTIVE_PROJECT: 'Active Project',
    ROLE: 'Role',
    ACTIVE_CONNECTION: 'Active Connection',
    NO_ACTIVE_PROJECT: 'No active project',
    LANGUAGE: 'Language',
    PROJECTS: 'Projects',
    CONNECTIONS: 'Connections'
  },
  IMPORT_EXPORT:
  {
    IMPORT: 'Import',
    EXPORT: 'Export',
    POPULATE_FROM_BOT: 'Populate From Bot',
    IMPORT_ARTIFACTS: 'Import Artifacts',
    EXPORT_ARTIFACTS: 'Export Artifacts',
    SELECT_ARTIFACT_TO_IMPORT: 'Select the Artifact to be Imported',
    SELECT_FILES_TO_IMPORT: 'Select the files to be Imported',
    SELECT_ARTIFACT_TO_EXPORT: 'Select the Artifact to be Exported',
    SELECT_FILES_TO_EXPORT: 'Select the files to be Exported',
    UTTERANCE_DATA: 'Utterances Data',
    TEST_CASES_DATA: 'Test Cases Data',
    TOTAL_UTTERANCES: 'Total Utterance',
    UTTERANCES_PASS: 'Utterance Passed',
    UTTERANCES_FAIL: 'Utterance Failed',
    TEST_CASES: 'Test Cases',
    UTTERANCES: 'Utterances',
    TOTAL_TEST_CASES: 'Total Test Cases',
    TEST_CASES_PASS: 'Test Cases Passed',
    TEST_CASES_FAIL: 'Test Cases Failed',
    NOTIFIER: {
      SUCCESS_TEST_CASES_IMPORTED: 'Test Cases Imported',
      TOTAL_ARTIFACTS: 'Total Artifacts to be imported',
      SUCCESSFUL_IMPORTS: 'Successful imports',
      ARTIFACTS_EXPORTED_SUCCESSFULLY: 'Artifacts exported successfully'
    }
  },
  PROJECT_MANAGEMENT: {
    PROJECT_INFORMATION: 'General Information',
    EXECUTION_CONFIGURATION: 'CLI Execution Configuration',
    SMTP_CONFIGURATION: 'SMTP Configuration',
    PROJECT_ID: 'Project ID',
    DISPLAY_NAME: 'Display Name',
    DESCRIPTION: 'Description',
    DESCRIPTION_PLACEHOLDER: 'Max 400 Characters',
    AUTHORIZATION_KEY: 'Authorization Key',
    REPORT_MAILING_LIST: 'Report Mailing List',
    REPORT_MAILING_LIST_PLACEHOLDER: 'Semicolon separated list',
    ENABLE_EMAIL_NOTIFICATION: 'Enable E-mail Notification',
    SMTP_SERVER_CONFIGURATION: 'SMTP Server Configuration',
    SMTP_SERVER_URL: 'SMTP Server URL/IP',
    PORT_NUMBER: 'Port Number',
    SMTP_AUTHENTICATION: 'SMTP Authentication',
    SMTP_USERNAME: 'SMTP Username',
    PASSWORD: 'Password',
    SAVE: 'SAVE',
    TEST_CONNECTION: 'TEST CONNECTION',
    SECURE_CONNECTION: 'Secure Connection',
    NO: 'NO',
    SSL: 'SSL',
    TLS: 'TLS',
    SEND_EMAIL_FROM: 'Send Email From',
    NAME: 'Name',
    EMAIL: 'Email',
    NOTIFIER: {
      SUCCESS_PROJECT_SAVED: 'Project details saved successfully',
      ERROR_PROJECT: 'Error occurred while saving Project details',
      TEST_SUCCESS: 'Test mail sent successfully.',
      COPIED_SUCCESSFULLY: 'Authorization key has been copied to clipboard'
    },
    VALIDATIONS: {
      SMTP_SERVER_URL_REQUIRED: 'SMTP Server URL/IP is required',
      PORT_REQUIRED: 'Port Number is required',
      USERNAME_REQUIRED: 'Username is required',
      PASSWORD_REQUIRED: 'Password is required',
      NAME_REQUIRED: 'Project Name is required',
      DESCRIPTION_REQUIRED: 'Description is required',
      RECIPIENTS_REQUIRED: 'Recipients are required and must be semicolon separated',
      AUTHORIZATION_KEY_REQUIRED: 'Authorization Key is required. Please generate it by clicking on generate button.',
      INVALID_EMAIL: 'Email Id is invalid',
      SENDER_NAME_REQUIRED: 'Name is required',
      EMAIL_REQUIRED: 'Email is required',
      SECURE_CONNECTION_REQUIRED: 'Secure connection is required'
    },
    PROFILE: 'Profile',
    PROJECTS: 'Projects',
    CONNECTIONS: 'Connections',
    LANGUAGE: 'Language'
  },
  COMPARE_RESULTS: {
    TEST_CASE_INSTANCES: 'Test Case Instances',
    SELECT_PAST_VERSION: 'Select Past Version',
    SELECT_CURRENT_VERSION: 'Select Current Version',
    STARTED_AT: 'Started at',
    SUCCESS_RATE: 'Success Rate',
    SHOW_DIFFERENCE: 'Show Difference',
    KEEP_FAILED: 'Keep Failed'
  },
  LOADER: {
    LOADER_TEXT: 'Please wait...'
  }
};

module.exports = en;