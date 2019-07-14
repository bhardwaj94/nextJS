/* spell-checker: disable */
const fr = {
  APPLICATION: {
    TITLE: 'Témoigner'
  },
  LANG: {
    LABEL: 'Langue',
    ENGLISH: 'Anglais',
    FRENCH: 'Français',
    GERMAN: 'Allemand',
    'en-US': 'Anglais',
    'fr-FR': 'Français',
    'de-DE': 'Allemand',
    MIN: {
      'en-US': 'FR',
      'fr-FR': 'FR',
      'de-DE': 'DE'
    }
  },
  NAVBAR: {
    HOME: 'maison',
    ABOUT: 'environ'
  },
  ACTIONS: {
    SAVE: 'sauvegarder',
    CANCEL: 'Annuler',
    AGREE: 'Oui',
    DISAGREE: 'non',
    MOVE: 'Se déplacer',
    COPY: 'Copie',
    CONTINUE: 'Continuer',
    INFO_AGREE: 'D\'accord'
  },
  ERROR_CODE: {
    UNKNOWN_ERROR: 'Erreur inconnue',
    UNAUTHORIZED: 'Non autorisé',
    DIRECTORY_NOT_FOUND: 'Répertoire introuvable',
    DUPLICATE_DIRECTORY: 'Répertoire existe déjà ',
    TEST_CASE_DELETION_UNSUCCESSFUL: 'Suppression de scénario de test infructueuse',
    SOURCE_DIRECTORY_NOT_FOUND: 'Répertoire source introuvable',
    TEST_CASE_UPDATE_FAILED: 'Mise à jour de cas de test a échoué',
    COPYING_DIRECTORY_FAILED: 'Copie de répertoire n’a pas',
    FILE_ALREADY_EXISTS: 'Fichier existe déjà',
    TEST_CASE_NOT_FOUND: 'Cas de test non trouvé',
    EXECUTION_FAILED: 'Erreur d’exécution',
    MAX_DEPTH_REACHED: 'Aucun plan de test plus ne peut être créés dans ce plan de test',
    MAX_TEST_CASES: 'Aucun cas de test plus ne peuvent être créés dans ce plan de test',
    TEST_INSTANCE_TITLE_ALREADY_EXIST: 'Instance de test existent déjà',
    TEST_INSTANCE_DELETION_UNSUCCESSFUL: 'Suppression d’instance n’a pas d’essai',
    TEST_SET_NAME_ALREADY_EXISTS: 'Nom de jeu de test existent déjà',
    ROOT_ALREADY_EXISTS: 'Racine existe déjà.',
    ROOT_NOT_FOUND: 'Racine non trouvé.',
    CONTAINER_ALREADY_EXISTS: 'Conteneur set existent déjà',
    CONTAINER_OLD_PARENT_NOT_FOUND: 'SetContainer vieux Parent introuvable',
    CONTAINER_NEW_PARENT_NOT_FOUND: 'SetContainer nouveau Parent introuvable',
    CONTAINER_NOT_FOUND: 'Certains SetContainer introuvable',
    CONTAINER_DELETION_FAILED: 'Suppression de conteneur en panne',
    CONNECTIONS_NOT_FOUND: 'Connexion non trouvée',
    CONNECTION_NAME_ALREADY_EXISTS: 'Nom de la connexion existe déjà',
    CONNECTION_DELETION_UNSUCCESSFUL: 'Suppression de connexion infructueuse',
    SESSION_EXPIRED: 'La session a expiré. Actualisation de continuer.',
    PROJECTS_NOT_FOUND: 'Projets non trouvés',
    NO_UTTERANCE_FOUND: 'Aucune énonciation trouvée',
    INVALID_DETAILS_FOR_SMTP: 'Impossible d’envoyer des e-mails de test ! S’il vous plaît vérifier vos Configurations SMTP.',
    UTTERANCE_ALREADY_EXISTS: 'Énonciation déjà existe',
    UTTERANCE_ALREADY_MAPPED_UPDATE_FAILED: 'Prononcé non modifiable',
    NO_INSTANCE_ADDED: 'Aucun cas ont été ajoutés',
    CONNECTION_NOT_FOUND: 'La connexion n\'existe plus.',
    BOT_DOWN: 'Bot n’est pas prêt pour l’importation',
    PLAN_NOT_CREATED: 'Plan n’a pas été créé. Veuillez vérifier les détails de votre connexion.',
    TEST_CASE_UPDATE_FAILED_REFERRED: 'Mise à jour de cas de test a échoué. Mentionné dans les autres cas de test.',
    TEST_CASE_DELETE_FAILED_REFERRED: 'Suppression de cas de test a échoué. Mentionné dans les autres cas de test.',
    TEST_CASES_FEW_NOT_DELETED: 'Quelques cas de test ne pas supprimé. Mentionné dans les autres cas de test.',
    CASE_NOT_FOUND: 'Le cas inclus n’est pas trouvé',
    USER_EMAIL_NOT_EXISTS: 'Aucune adresse e-mail trouvée pour l’utilisateur actuel',
    FAILED_TO_CONNECT_WITH_BOT: 'Échec de la connexion avec le bot',
    BOT_NOT_RESPONDING: 'Bot ne répond pas',
    UNSUPPORTED_MESSAGE_FORMAT: 'Format de message non pris en charge',
    CONVERSATION_ENDED: 'Votre session de chat était inactive pendant trop longtemps de sorte qu’il a été terminé.'
  },
  TEST_EXECUTION: {
    EXECUTION_GRID: 'Instances d’exécution',
    EXECUTION_REPORT: 'Rapport d’exécution',
    LANGUAGE: 'Exécution à l\'aide du langage de connexion:  ',
    COMPARE_LANGUAGE: 'Comparaison à l\'aide du langage de connexion',
    COLUMNS: {
      RUN_ID: 'Id de série',
      STATUS: 'Statut',
      TEST_CASE_INSTANCE: 'Instance de scénario de test',
      TEST_SET: 'Ensemble de test',
      DURATION: 'Duration(sec)',
      LANGUAGE: 'Langue',
      EXECUTION_STARTED: 'Exécution a commencé'
    },
    NOTIFIER: {
      SUCCESS_ADD_TEST_SET_CONTAINER: 'Test de définie le conteneur enregistré avec succès',
      SUCCESS_DELETE_TEST_SET_CONTAINER: 'Test de définie le conteneur supprimé avec succès',
      SUCCESS_EDIT_TEST_SET_CONTAINER: 'Test de définie le conteneur mis à jour avec succès',
      SUCCESS_ADD_TEST_SET: 'Ensemble de test enregistré avec succès',
      SUCCESS_DELETE_TEST_SET: 'Ensemble de test supprimé avec succès',
      SUCCESS_EDIT_TEST_SET: 'Ensemble de test mis à jour avec succès',
      SUCCESS_DELETED_TEST_INSTANCE: 'Tester les instances supprimés avec succès',
      SUCCESS_ADD_TEST_INSTANCE: 'Cas de test ajoutés avec succès'
    },
    TOOLTIP: {
      ADD_CONTAINER: 'Ajouter Test conteneur Set',
      ADD_SET: 'Ajouter jeu de Test',
      ADD_INSTANCE: 'Ajoutez l’Instance',
      DELETE_INSTANCES: 'Supprimer des Instances sélectionnées',
      EXECUTE_INSTANCE: 'Exécuter des Instances sélectionnées',
      EXECUTE_ALL_INSTANCE: 'Exécuter toutes les Instances',
      REORDER_TEST_CASE_INSTANCES: 'Réorganiser les instances de cas de test'
    },
    DIALOG: {
      DELETE_TITLE: 'Mise en garde',
      DELETE_SET_CONTENT: 'Ceci supprimera l’ensemble de test et de ses instances en permanence. Es-tu sûr ?',
      DELETE_CONTAINER_CONTENT: 'Ceci supprimera l’essai défini conteneur et ses ensembles et leurs instances en permanence. Es-tu sûr ?',
      ADD_SET_TITLE: 'Ajouter jeu de Test',
      ADD_CONTAINER_TITLE: 'Ajouter Test conteneur Set',
      EDIT_SET_TITLE: 'Modifier le jeu de Test',
      EDIT_CONTAINER_TITLE: 'Modifier le conteneur Set Test',
      SELECT_CONTAINER: 'Sélectionnez le conteneur Parent',
      NAME_VALIDATION: 'Nom est requis',
      NAME_CONSTRAINT: 'Name ne peut pas contenir ^ <> : ; ? » *|\\/',
      NAME_WORD_CONSTRAINT: 'Nom doit contenir au moins un mot ou un caractère',
      TEST_CASE_INSTANCES: 'Instances de cas de test'
    },
    INSTANCES: {
      DELETE_DIALOG_CONTENT: 'Cela va supprimer les instances de test en permanence. Es-tu sûr ?',
      ID: 'Id d’Instance de test',
      TITLE: 'Titre',
      ORIGIN: 'Origine',
      ADD_TEST_CASES: 'Ajouter les cas de Test',
      DETAIL: 'Détail de Instance de test',
      CREATED: 'Créé',
      SEQUENCE: 'Exécution Séquence'
    },
    REORDER_DIALOG: {
      SEQUENCE_SAVED_SUCCESSFULLY: 'La séquence d’exécution a été mise à jour avec succès.',
      ORDER_TEST_CASE_INSTANCE_DIALOG: 'Instances de cas de test de commande',
      CASES_SELECTION_CONSTRAINT: 'Veuillez sélectionner au moins un cas de test'
    }
  },
  UTTERANCES: {
    COLUMNS: {
      TITLE: 'Nom',
      EXECUTE: '',
      LAST_RESULT: 'Dernier résultat',
      CREATED: 'Créé',
      ACTIONS: '',
      MODIFIED: 'Modifié'
    },
    DIALOG: {
      TITLE: {
        NEW: 'Nouvel énoncé',
        EDIT_VIEW: 'Modifier l’énoncé'
      },
      INPUT: {
        TITLE: {
          LABEL: 'Nom',
          PLACEHOLDER: 'Entrez le nom d’énonciation... '
        },
        UTTERANCE: {
          LABEL: 'Énonciations',
          PLACEHOLDER: 'Ajouter un énoncé...'
        }
      },
      VALIDATION: {
        TITLE_REQUIRED: 'Nom est requis',
        TITLE_CONSTRAINT: 'Le nom ne peut pas contenir ^<>:;,?"*|\\/',
        UTTERANCE: {
          REQUIRED: 'Énonciation est requise'
        }
      },
      SAVE: 'sauvegarder',
      CANCEL: 'Annuler'
    },
    TOOLTIP: {
      ADD_UTTERANCE: 'Ajouter nouvelle énonciation',
      DELETE_UTTERANCES: 'Supprimer les énoncés',
      EXPORT_UTTERANCES: 'Exporter les énoncés',
      SORT_BY: 'Trier par',
      EDIT_UTTERANCE: 'Modifier l’énoncé',
      DELETE_UTTERANCE_SINGLE: 'Supprimer l’énoncé',
      SELECT_LANGUAGE: 'Langue d’affichage de certains énoncés'
    },
    DELETE_DIALOG_TITLE: 'Mise en garde',
    DELETE_DIALOG_CONTENT: 'Ceci supprimera définitivement l’utterance(s) sélectionné. Es-tu sûr ?',
    NOTIFIER: {
      SUCCESS_UTTERANCE_SAVED: 'Énonciation enregistrée avec succès',
      ERROR_UTTERANCE: 'Erreur s’est produite lors de l’enregistrement d’énonciation',
      ERROR_UTTERANCE_DATA_NOT_FOUND: 'Erreur s’est produite lors d’aller chercher les détails de l’énonciation',
      SUCCESS_UTTERANCE_DELETED: 'Utterance(s) supprimé avec succès',
      ERROR_UTTERANCE_DELETE: 'Erreur s’est produite lors de la suppression d’énonciation',
      ERROR_EXECUTE: 'Erreur s’est produite lors de l’exécution d’énonciation',
      REQUIRED_SELECTED_UTTERANCE: 'Sélectionnez au moins un énoncé',
      SUCCESS_UTTERANCE_MAPPED_PARTIAL_DELETED: 'Peu d\'énoncés ne seront pas supprimés car ils sont déjà utilisés'
    }
  },
  PROJECTS: {
    DIALOG: {
      TITLE: 'Projet',
      SELECT_PROJECT: 'Sélectionnez le projet',
      PROJECT_VALIDATION: 'Projet est requise'
    }
  },
  MISC: {
    NAME: 'Nom',
    EDIT: 'Edit',
    DELETE: 'Supprimer',
    VIEW: 'Vue',
    DELETE_TITLE: 'Mise en garde',
    EXECUTE: 'Exécuter',
    CLOSE: 'Fermer',
    CANCEL: 'Annuler',
    SAVE: 'sauvegarder',
    CLEAR: 'débarrasser',
    ACTIONS: 'Actions',
    STATUS: 'Statut',
    TITLE: 'Titre',
    OK: 'D\'accord',
    SEARCH: 'rechercher',
    NO_RESULT_FOUND: 'Aucun résultat trouvé.',
    CLEAR_SEARCH_FILTERS: ' Effacer les filtres de recherche.',
    OVERWRITE_DIALOG_TITLE: 'Mise en garde !',
    INFO_DIALOG_TITLE: 'Informations !',
    INFO_DIALOG_CONTENT: 'Espace réservé Scripts seront ajoutés dans les langues suivantes : ',
    INFO_DIALOG_SHOW: 'Ne plus afficher',
    OVERWRITE_DIALOG_CONTENT: 'Ceci a été modifié par',
    OVERWRITE_DIALOG_CONTENT_CONFIRM: 'vous voulez écraser ?',
    EXECUTION_STATUS: {
      '0': 'FONCTIONNE PAS',
      '1': 'EN FILE D’ATTENTE',
      '2': 'EN COURS D’EXÉCUTION',
      '3': 'PASSÉ',
      '4': 'A ÉCHOUÉ',
      '5': 'ERREUR'
    },
    WARNING: 'Mise en garde',
    SESSION_CONTENT: 'Votre session est sur le point d’expirer.'
  },
  USER_MENU: {
    LOGOUT: 'Fermer la session',
    PROFILE: 'Voir le profil',
    ACTIVE_PROJECT: 'Projet actif',
    ROLE: 'Rôle',
    ACTIVE_CONNECTION: 'Connexion active',
    NO_ACTIVE_PROJECT: 'Aucun projet actif',
    LANGUAGE: 'Langue',
    PROJECTS: 'Projets',
    CONNECTIONS: 'Connexions'
  },
  IMPORT_EXPORT: {
    IMPORT: 'produit importé',
    EXPORT: 'exporter',
    POPULATE_FROM_BOT: 'Peupler de bot',
    IMPORT_ARTIFACTS: 'Importer des artefacts',
    EXPORT_ARTIFACTS: 'Exporter des artefacts',
    SELECT_ARTIFACT_TO_IMPORT: 'Sélectionnez l’artefact à importer',
    SELECT_FILES_TO_IMPORT: 'Sélectionnez les fichiers à importer',
    SELECT_ARTIFACT_TO_EXPORT: 'Sélectionnez l’artefact à exporter',
    SELECT_FILES_TO_EXPORT: 'Sélectionnez les fichiers à exporter',
    UTTERANCE_DATA: 'Données des énoncés',
    TEST_CASES_DATA: 'Données de cas de test',
    TOTAL_UTTERANCES: 'Énoncé total',
    UTTERANCES_PASS: 'Énoncé passé',
    UTTERANCES_FAIL: 'Échec de l’énoncé',
    TEST_CASES: 'Cas de test',
    UTTERANCES: 'Déclarations',
    TOTAL_TEST_CASES: 'Nombre total de cas de test',
    TEST_CASES_PASS: 'Cas de test passés',
    TEST_CASES_FAIL: 'Échec des cas de test',
    NOTIFIER: {
      SUCCESS_TEST_CASES_IMPORTED: 'Cas de test importés',
      TOTAL_ARTIFACTS: 'Total des artefacts à importer',
      SUCCESSFUL_IMPORTS: 'Importations réussies',
      ARTIFACTS_EXPORTED_SUCCESSFULLY: 'Artefacts exportés avec succès'
    }
  },
  PROJECT_MANAGEMENT: {
    PROJECT_INFORMATION: 'Informations générales',
    EXECUTION_CONFIGURATION: 'Configuration de l’exécution CLI',
    SMTP_CONFIGURATION: 'Configuration de SMTP',
    PROJECT_ID: 'ID de projet',
    DISPLAY_NAME: 'Nom d’affichage',
    DESCRIPTION: 'Description',
    DESCRIPTION_PLACEHOLDER: 'Max 400 caractères',
    AUTHORIZATION_KEY: 'Clé d’autorisation',
    REPORT_MAILING_LIST: 'Liste d’envoi de rapport',
    REPORT_MAILING_LIST_PLACEHOLDER: 'Liste séparée des points-virgules',
    ENABLE_EMAIL_NOTIFICATION: 'Activer la Notification par courrier électronique',
    SMTP_SERVER_CONFIGURATION: 'Configuration du serveur SMTP',
    SMTP_SERVER_URL: 'URL/IP de serveur SMTP',
    PORT_NUMBER: 'Numéro de port',
    SMTP_AUTHENTICATION: 'Authentification SMTP',
    SMTP_USERNAME: 'Nom d’utilisateur SMTP',
    PASSWORD: 'mot de passe',
    SAVE: 'sauvegarder',
    TEST_CONNECTION: 'TESTER LA CONNEXION',
    SECURE_CONNECTION: 'Connexion sécurisée',
    NO: 'non',
    SSL: 'SSL',
    TLS: 'TLS',
    SEND_EMAIL_FROM: 'Envoyer des emails à partir',
    NAME: 'Nom',
    EMAIL: 'email',
    NOTIFIER: {
      SUCCESS_PROJECT_SAVED: 'Détails du projet enregistrés avec succès',
      ERROR_PROJECT: 'Erreur s’est produite lors de l’enregistrement des détails du projet',
      TEST_SUCCESS: 'Test mail envoyé avec succès.',
      COPIED_SUCCESSFULLY: 'Clé d’autorisation a été copiée dans le presse-papiers'
    },
    VALIDATIONS: {
      SMTP_SERVER_URL_REQUIRED: 'URL/IP du serveur SMTP est requis',
      PORT_REQUIRED: 'Numéro de port est nécessaire',
      USERNAME_REQUIRED: 'Nom d’utilisateur est requis',
      PASSWORD_REQUIRED: 'Mot de passe est requis',
      NAME_REQUIRED: 'Nom du projet est requise',
      DESCRIPTION_REQUIRED: 'Description est requise',
      RECIPIENTS_REQUIRED: 'Les bénéficiaires sont nécessaires et doivent être séparées par des points-virgules',
      AUTHORIZATION_KEY_REQUIRED: 'Clé d’autorisation est nécessaire. S’il vous plaît la générer en cliquant sur générer bouton.',
      INVALID_EMAIL: 'Identification d’email n’est pas valide',
      SENDER_NAME_REQUIRED: 'Nom est requis',
      EMAIL_REQUIRED: 'Email est obligatoire',
      SECURE_CONNECTION_REQUIRED: 'Connexion sécurisée est requise'
    },
    PROFILE: 'Voir le profil',
    PROJECTS: 'Projets',
    CONNECTIONS: 'Connexions',
    LANGUAGE: 'Langue'
  },
  COMPARE_RESULTS: {
    TEST_CASE_INSTANCES: 'Cas de test',
    SELECT_PAST_VERSION: 'Sélectionner la version antérieure',
    SELECT_CURRENT_VERSION: 'Sélectionnez la version actuelle',
    STARTED_AT: 'Commencé à',
    SUCCESS_RATE: 'Taux de réussite',
    SHOW_DIFFERENCE: 'Montrer la différence',
    KEEP_FAILED: 'garder échoué'
  },
  LOADER: {
    LOADER_TEXT: 'S\'il vous plaît, attendez...'
  }
};

module.exports = fr;