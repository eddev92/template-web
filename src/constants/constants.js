export const defaultValuesAuth = {
  listAcquirers: null,
  listAcquirersLoaded: false,
  onlyOneAcquirer: false,
  responseGetAuthUserInfo: {},
  userEmailLoaded: false,
  user: {
      email: '',
      password: ''
  },
	userResponseAuth: {},
	userResponseByCode: {},
	responseSendCodeChallenge: null,
	isValidateCode: false,
	isLogged: false,
  isLoggedByCode: false,
  isLoading: false,
  isLoadingValidationCode: false,
	data: [],
	commentsById: [],
	validateFields: {
		email: false,
		password: false
	},
	userCode: null,
	attemp: 0,
	attempsTotal: 0,
  showPass: false,
  isDisabled: false,
  objFiltered: {
    fromDateQuery: '',
    toDateQuery: '',
    authResultQuery: '',
    nameQuery: '',
    codeQuery: '',
    numberOrderQuery: '',
    brandQuery: '',
    inclearTypeQuery: '',
    maskTypeQuery: '',
    cardNumberQuery: '',
    binQuery: '',
    currencyQuery: '',
    eciQuery: ''
  },
  mailReset: '',
  responseResetPassword: {},
  resetLoaded: false,
  resetValided: false
}
