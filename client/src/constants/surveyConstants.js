import { TOOL_TIP__TEXT } from './common';

export const EXISTING_SUPPORTER = 'EXISTING_SUPPORTER';
export const EXISTING_SUPPORTER__LABEL = 'Are you a Tottenham Hotspur Fan?';
export const EXISTING_SUPPORTER__FIELD_NAME = 'isExistingSupporter';
export const EXISTING_SUPPORTER__YES__DISPLAY = 'Yes';
export const EXISTING_SUPPORTER__YES = 'EXISTING_SUPPORTER__YES';
export const EXISTING_SUPPORTER__NO = 'EXISTING_SUPPORTER__NO';
export const EXISTING_SUPPORTER__NO__DISPLAY = 'No';
export const EXISTING_SUPPORTER__TOOLTIP_CLICK_ID = 'EXISTING_SUPPORTER__TOOLTIP_CLICK_ID';
export const EXISTING_SUPPORTER__TOOLTIP_CONFIG = [
  {
    key: 0,
    type: TOOL_TIP__TEXT,
    value: 'Why would you not love the Lilywhites? Are you mad?',
  },
];

export const APPLICANT_EMAIL = 'APPLICANT_EMAIL?';
export const APPLICANT_EMAIL__TITLE = 'What is your email address?';
export const APPLICANT_EMAIL__FIELD_NAME = 'email';
export const APPLICANT_EMAIL__MAX_LENGTH = 100;
export const APPLICANT_EMAIL__INVALID_MSG = 'Enter a valid email address';

export const APPLICANT_FIRST_NAME__FIELD_NAME = 'firstName';
export const APPLICANT_FIRST_NAME = 'APPLICANT_FIRST_NAME';
export const APPLICANT_FIRST_NAME__MAX_LENGTH = 35;
export const APPLICANT_FIRST_NAME__LABEL = 'First name';
export const APPLICANT_FIRST_NAME__INVALID_MSG = 'Enter your first name';
export const APPLICANT_FIRST_NAME__INVALID_MAX_MSG = 'Enter 35 characters or less';

export const APPLICANT_LAST_NAME__FIELD_NAME = 'lastName';
export const APPLICANT_LAST_NAME = 'APPLICANT_LAST_NAME';
export const APPLICANT_LAST_NAME__MAX_LENGTH = 35;
export const APPLICANT_LAST_NAME__LABEL = 'Last name';
export const APPLICANT_LAST_NAME__INVALID_MSG = 'Enter your last name';
export const APPLICANT_LAST_NAME__INVALID_MAX_MSG = 'Enter 35 characters or less';

export const APPLICANT_PHONE_NUMBER__REGEX = /^0[1|2][0-9]{8,9}$|^07[0-9]{9}$/;
export const APPLICANT_PHONE_NUMBER = 'APPLICANT_PHONE_NUMBER';
export const APPLICANT_PHONE_NUMBER__FIELD_NAME = 'officePhoneNumber';
export const APPLICANT_PHONE_NUMBER__MIN_LENGTH = 10;
export const APPLICANT_PHONE_NUMBER__MAX_LENGTH = 11;
export const APPLICANT_PHONE_NUMBER__LABEL = 'Business phone number';
export const APPLICANT_PHONE_NUMBER__INVALID_MSG = 'Enter a valid UK phone number';

export const APPLICANT_MOBILE_PHONE__REGEX = /^07[0-9]{9}$/;
export const APPLICANT_MOBILE_PHONE_NUMBER = 'APPLICANT_MOBILE_PHONE_NUMBER';
export const APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME = 'mobilePhoneNumber';
export const APPLICANT_MOBILE_PHONE_NUMBER__MAX_LENGTH = 11;
export const APPLICANT_MOBILE_PHONE_NUMBER__LABEL = 'Mobile phone number';
export const APPLICANT_MOBILE_PHONE_NUMBER__INVALID_MSG = 'Enter a valid UK phone number';

export const YEARS_SUPPORTING = 'YEARS_SUPPORTING';
export const YEARS_SUPPORTING__LABEL = 'How many years have you been supporting the Lilywhites?';
export const YEARS_SUPPORTING__SUMMARY_LABEL = 'Years supporting spurs?';
export const YEARS_SUPPORTING__FIELD_NAME = 'yearsSupporting';
export const YEARS_SUPPORTING__OPTION__SUBTITLE = 'Years';
export const YEARS_SUPPORTING__OPTION__ZERO = 'YEARS_SUPPORTING__OPTION__ZERO';
export const YEARS_SUPPORTING__OPTION__ZERO__LABEL = '0';
export const YEARS_SUPPORTING__OPTION__ONE_TO_THREE = 'YEARS_SUPPORTING__OPTION__ONE_TO_THREE';
export const YEARS_SUPPORTING__OPTION__ONE_TO_THREE__LABEL = '1 - 3';
export const YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE = 'YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE';
export const YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE__LABEL = '4 - 5';
export const YEARS_SUPPORTING__OPTION__SIX_PLUS = 'YEARS_SUPPORTING__OPTION__SIX_PLUS';
export const YEARS_SUPPORTING__OPTION__SIX_PLUS__LABEL = '6+';
export const YEARS_SUPPORTING__QUESTION_CONFIG = {
  name: YEARS_SUPPORTING__FIELD_NAME,
  questions: [
    {
      title: YEARS_SUPPORTING__OPTION__ZERO__LABEL,
      subTitle: YEARS_SUPPORTING__OPTION__SUBTITLE,
      value: YEARS_SUPPORTING__OPTION__ZERO,
    },
    {
      title: YEARS_SUPPORTING__OPTION__ONE_TO_THREE__LABEL,
      subTitle: YEARS_SUPPORTING__OPTION__SUBTITLE,
      value: YEARS_SUPPORTING__OPTION__ONE_TO_THREE,
    },
    {
      title: YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE__LABEL,
      subTitle: YEARS_SUPPORTING__OPTION__SUBTITLE,
      value: YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE,
    },
    {
      title: YEARS_SUPPORTING__OPTION__SIX_PLUS__LABEL,
      subTitle: YEARS_SUPPORTING__OPTION__SUBTITLE,
      value: YEARS_SUPPORTING__OPTION__SIX_PLUS,
    },
  ],
};

export const MATCHES_WATCHED = 'MATCHES_WATCHED';
export const MATCHES_WATCHED__LABEL = 'How many matches have you watched?';
export const MATCHES_WATCHED__SUMMARY_LABEL = 'How many matches have you watched?';
export const MATCHES_WATCHED__FIELD_NAME = 'matchesWatched';
export const MATCHES_WATCHED__OPTION__SUBTITLE = 'Matches';
export const MATCHES_WATCHED__OPTION__ZERO = 'MATCHES_WATCHED__OPTION__ZERO';
export const MATCHES_WATCHED__OPTION__ZERO__LABEL = '0';
export const MATCHES_WATCHED__OPTION__ONE_TO_THREE = 'MATCHES_WATCHED__OPTION__ONE_TO_THREE';
export const MATCHES_WATCHED__OPTION__ONE_TO_THREE__LABEL = '1 - 3';
export const MATCHES_WATCHED__OPTION__FOUR_TO_FIVE = 'MATCHES_WATCHED__OPTION__FOUR_TO_FIVE';
export const MATCHES_WATCHED__OPTION__FOUR_TO_FIVE__LABEL = '4 - 5';
export const MATCHES_WATCHED__OPTION__SIX_PLUS = 'MATCHES_WATCHED__OPTION__SIX_PLUS';
export const MATCHES_WATCHED__OPTION__SIX_PLUS__LABEL = '6+';
export const MATCHES_WATCHED__QUESTION_CONFIG = {
  name: MATCHES_WATCHED__FIELD_NAME,
  questions: [
    {
      title: MATCHES_WATCHED__OPTION__ZERO__LABEL,
      subTitle: MATCHES_WATCHED__OPTION__SUBTITLE,
      value: MATCHES_WATCHED__OPTION__ZERO,
    },
    {
      title: MATCHES_WATCHED__OPTION__ONE_TO_THREE__LABEL,
      subTitle: MATCHES_WATCHED__OPTION__SUBTITLE,
      value: MATCHES_WATCHED__OPTION__ONE_TO_THREE,
    },
    {
      title: MATCHES_WATCHED__OPTION__FOUR_TO_FIVE__LABEL,
      subTitle: MATCHES_WATCHED__OPTION__SUBTITLE,
      value: MATCHES_WATCHED__OPTION__FOUR_TO_FIVE,
    },
    {
      title: MATCHES_WATCHED__OPTION__SIX_PLUS__LABEL,
      subTitle: MATCHES_WATCHED__OPTION__SUBTITLE,
      value: MATCHES_WATCHED__OPTION__SIX_PLUS,
    },
  ],
};

export const SHIRTS_OWNED = 'SHIRTS_OWNED';
export const SHIRTS_OWNED__LABEL = 'How many shirts do you own?';
export const SHIRTS_OWNED__SUMMARY_LABEL = 'Shirts owned?';
export const SHIRTS_OWNED__FIELD_NAME = 'shirtsOwned';
export const SHIRTS_OWNED__OPTION__ZERO = 'SHIRTS_OWNED__OPTION__ZERO';
export const SHIRTS_OWNED__OPTION__SUBTITLE = 'Shirts';
export const SHIRTS_OWNED__OPTION__ZERO__LABEL = '0';
export const SHIRTS_OWNED__OPTION__ONE_TO_THREE = 'SHIRTS_OWNED__OPTION__ONE_TO_THREE';
export const SHIRTS_OWNED__OPTION__ONE_TO_THREE__LABEL = '1 - 3';
export const SHIRTS_OWNED__OPTION__FOUR_TO_FIVE = 'SHIRTS_OWNED__OPTION__FOUR_TO_FIVE';
export const SHIRTS_OWNED__OPTION__FOUR_TO_FIVE__LABEL = '4 - 5';
export const SHIRTS_OWNED__OPTION__SIX_PLUS = 'SHIRTS_OWNED__OPTION__SIX_PLUS';
export const SHIRTS_OWNED__OPTION__SIX_PLUS__LABEL = '6+';
export const SHIRTS_OWNED__QUESTION_CONFIG = {
  name: SHIRTS_OWNED__FIELD_NAME,
  questions: [
    {
      title: SHIRTS_OWNED__OPTION__ZERO__LABEL,
      subTitle: SHIRTS_OWNED__OPTION__SUBTITLE,
      value: SHIRTS_OWNED__OPTION__ZERO,
    },
    {
      title: SHIRTS_OWNED__OPTION__ONE_TO_THREE__LABEL,
      subTitle: SHIRTS_OWNED__OPTION__SUBTITLE,
      value: SHIRTS_OWNED__OPTION__ONE_TO_THREE,
    },
    {
      title: SHIRTS_OWNED__OPTION__FOUR_TO_FIVE__LABEL,
      subTitle: SHIRTS_OWNED__OPTION__SUBTITLE,
      value: SHIRTS_OWNED__OPTION__FOUR_TO_FIVE,
    },
    {
      title: SHIRTS_OWNED__OPTION__SIX_PLUS__LABEL,
      subTitle: SHIRTS_OWNED__OPTION__SUBTITLE,
      value: SHIRTS_OWNED__OPTION__SIX_PLUS,
    },
  ],
};
