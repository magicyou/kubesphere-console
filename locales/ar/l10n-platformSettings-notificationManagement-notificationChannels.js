/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */
module.exports = {
  // Banner
  NOTIFICATION_MANAGEMENT: 'Notification Management',
  NOTIFICATION_CHANNELS: 'Notification Channels',
  NOTIFICATION_CHANNELS_DESC: 'Set notification receivers so that users are notified when resource metrics meet conditions and durations configured in alerting policies.',
  // Email
  MAIL_TITLE: 'البريد الإلكتروني',
  MAIL_DESC: 'Send notifications to email addresses.',
  INVALID_PORT_DESC: 'Please enter a valid port number.',
  ENTER_PORT_NUMBER: 'Please enter a port number.',
  ALERTING_NAME: 'Alert name',
  ALERTING_SEVERITY: 'Alert severity',
  ADDRESS_EMPTY_DESC: 'Please enter an address.',
  EMAIL_EMPTY_DESC: 'Please enter an email address.',
  SERVER_SETTINGS: 'Server Settings',
  RECIPIENT_SETTINGS: 'Recipient Settings',
  NOTIFICATION_CONDITIONS: 'Notification Conditions',
  CONTAINER: 'Container',
  VALUES: 'Values',
  CONDITION_OPERATOR: 'المشغل',
  NOTIFICATION_CONDITION_SETTING_TIP: 'The <strong>Contain/Not contain</strong> operators require one or more values. You can press <strong>Enter</strong> to set multiple strings.',
  NOTIFICATION_CONDITION_SETTINGS_DESC: 'Set the system to send only alerting messages that meet the conditions.',
  CONTAIN: 'Contain',
  NOT_CONTAIN: 'Not contain',
  EXIST: 'Exist',
  NOT_EXIST: 'Not exist',
  TAG_INPUT_PLACEHOLDER: 'Please enter the value and press Enter to confirm',
  PATTERN_TAG_INVALID_TIP: 'Invalid label. The label can contain only uppercase and lowercase letters, numbers, hyphens (-), underscores (_), and dots (.), and must begin and end with an uppercase or lowercase letter or number.',
  PATTERN_TAG_VALUE_INVALID_TIP: 'Invalid label values. The label values can only contain uppercase and lowercase letters, numbers, hyphens (-), underscores (_) and dots (.) and must begin and end with an uppercase or lowercase letter or number and be a maximum of 63 characters.',
  INVALID_NOTIFICATION_CONDITION: 'Please enter a correct notification condition.',
  SEND_TEST_MESSAGE: 'Send Test Message',
  SEND_TEST_MESSAGE_DESC: 'Send a test message to verify that the notification channel is working properly.',
  SEND_TEST_MESSAGE_SUCCESS_DESC: 'Verified successfully. A test message has been sent to you , please check it out.',
  SMTP_SERVER_ADDRESS: 'SMTP Server Address',
  USE_SSL_SECURE_CONNECTION: 'Use SSL secure connection',
  SENDER_EMAIL: 'Sender Email Address',
  INVALID_EMAIL: 'Invalid email address format.',
  INVALID_ADDRESS_DESC: 'Please enter a valid address.',
  MAX_EAMIL_COUNT: 'You can add a maximum of {count} emails.',
  SMTP_USER: 'SMTP Username',
  SMTP_PASSWORD: 'SMTP Password',
  ENTER_PASSWORD_TIP: 'Please enter the password.',
  ENTER_RECIPIENT_EMAIL_DESC: 'Please add at lease one email address of a recipient.',
  INVALID_EMAIL_ADDRESS_DESC: 'The email format is incorrect. Please enter a correct email address.',
  SMTP_USER_EMPTY_DESC: 'Please enter a SMTP username.',
  ADDED_SUCCESS_DESC: 'Added successfully.',
  POD: 'Pod',
  UPDATE_SUCCESSFUL: 'Updated successfully.',
  PATTERN_NAME_INVALID_TIP: 'Invalid name. The name can contain only lowercase letters, numbers, and hyphens (-).',
  // Feishu
  FEISHU: 'Feishu',
  FEISHU_TITLE: 'Feishu',
  FEISHU_DESC: 'Send notifications to Feishu users.',
  APP_SECRET: 'App Secret',
  // DingTalk
  DINGTALK_TITLE: 'DingTalk',
  DINGTALK: 'DingTalk',
  DINGTALK_DESC: 'Send notifications to DingTalk users.',
  PLEASE_ENTER_VALUE_CUSTOM: 'Please enter a {value}.',
  // DingTalk > Conversation Settings
  CONVERSATION_SETTINGS: 'Conversation Settings',
  CONVERSATION_ID: 'Conversation ID',
  CONVERSATION_ID_TIP: 'The conversation ID can only be obtained after it is configured by the system administrator. To configure the conversation ID, Please contact the system administrator.',
  DINGTALK_SETTING_TIP: 'Please set up a conversation or group chatbot.',
  ENTER_CONVERSATION_ID_DESC: 'Please enter a conversation ID.',
  MAX_CID_COUNT: 'You can add a maximum of {count} conversation IDs.',
  CONVERSATION_ID_EXISTS: 'The conversation ID already exists. Please add another conversation ID.',
  // DingTalk > DingTalk Chatbot
  CHATBOT_SETTINGS: 'DingTalk Chatbot',
  KEYWORDS_LIST: 'Keyword List',
  DINGTALK_CHATBOT_SECURITY_TIP: 'Please enter a secret or keywords.',
  ENTER_KEYWORD_DESC: 'Please enter a keyword.',
  MAX_KEYWORD_COUNT: 'You can add a maximum of {count} keywords.',
  KEYWORD_EXISTS: 'The keyword already exists. Please add another keyword.',
  EMPTY_KEYWORDS_DESC: 'No keyword is added.',
  DINGTALK_SECRET: 'Secret',
  // WeCom
  WECOM: 'WeCom',
  WECOM_TITLE: 'WeCom',
  WECOM_DESC: 'Send notifications to WeCom users.',
  WECOM_CORP_ID: 'Corporation ID',
  WECOM_AGENT_ID: 'App AgentId',
  RECIPIENT_SETTINGS_TIP: 'At least one item needs to be configured to receive notifications.',
  ENTER_WECOM_CORP_ID_DESC: 'Please enter a corporation ID.',
  ENTER_WECOM_AGENT_ID_DESC: 'Please enter an applicaiton AgentId.',
  ENTER_WECOM_SECRET_DESC: 'Please enter an application secret.',
  // WeCom > User ID
  USER_ID: 'User ID',
  TOUSER_LIST: 'Added User IDs',
  WECOM_TOUSER_PLACEHOLDER: 'User ID',
  EMPTY_TOUSER_DESC: 'No user ID is added.',
  ENTER_TOUSER_TIP: 'Please enter a user ID.',
  TOUSER_EXISTS: 'The user ID already exists. Please enter another user ID.',
  MAX_TOUSER_COUNT: 'You can add a maximum of {count} users.',
  // WeCom > Department ID
  DEPARTMENT_ID: 'Department ID',
  WECOM_TOPARTY_PLACEHOLDER: 'Department ID',
  TOPARTY_LIST: 'Added Department IDs',
  EMPTY_TOPARTY_DESC: 'No department ID is added.',
  ENTER_TOPARTY_TIP: 'Please enter a department ID.',
  TOPARTY_EXISTS: 'The department ID already exists. Please enter another department ID.',
  MAX_TOPARTY_COUNT: 'You can add a maximum of {count} departments.',
  // WeCom > Tag ID
  TAG_ID: 'Tag ID',
  TOTAG_LIST: 'Added Tag IDs',
  WECOM_TOTAG_PLACEHOLDER: 'Tag ID',
  EMPTY_TOTAG_DESC: 'No tag ID is added.',
  ENTER_TOTAG_TIP: 'Please enter a tag ID.',
  TOTAG_EXISTS: 'The tag ID already exists. Please enter another tag ID.',
  MAX_TOTAG_COUNT: 'You can add up to {count} tags.',
  // Slack
  SLACK: 'Slack',
  SLACK_TITLE: 'Slack',
  SLACK_DESC: 'Send notifications to Slack users.',
  SLACK_TOKEN: 'Slack Token',
  SLACK_TOKEN_DESC: 'Please enter a Slack token.',
  SLACK_CHANNEL: 'Slack channel',
  CHANNEL_SETTINGS: 'Channel Settings',
  ADDED_CHANNELS: 'Added Channels',
  EMPTY_CHANNEL_DESC: 'No channel is added.',
  ADD_CHANNEL_DESC: 'Please add a channel.',
  CHANNEL_EXISTS: 'The channel already exists. Please add another channel.',
  CHANNEL_SETTINGS_DESC: 'Please add a channel.',
  MAX_CHANNEL_COUNT: 'You can add a maximum of {count} channels.',
  // Webhook
  WEBHOOK: 'Webhook',
  WEBHOOK_TITLE: 'Webhook',
  WEBHOOK_DESC: 'Send notifications to a webhook.',
  WEBHOOK_URL_DESC: 'Please enter a webhook URL.',
  VERIFICATION_TYPE: 'Verification Type',
  SKIP_TLS_VERFICATION: 'Skip TLS verification (insecure)',
  VERIFICATION_TYPE_DESC: 'Please select a verification type.',
  BASIC_AUTH: 'Basic authentication',
  NO_AUTH: 'No authentication',
  BEARER_TOKEN: 'Bearer token',
  TOKEN: 'Token',
  WEBHOOK_USERNAME_EMPTY_DESC: 'يُرجى إدخال اسم مستخدم.',
  WEBHOOK_PASSWORD_EMPTY_DESC: 'Please enter a password.',
  WEBHOOK_TOKEN_EMPTY_DESC: 'Please enter a token.'
};