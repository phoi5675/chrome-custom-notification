// Copyright (c) 2024 phoi5675
//
// This software is released under the MIT License.

import { Message } from "@/types/common/message";

// https://opensource.org/licenses/MIT
const createNotification = () => {
  const notificationOpts: chrome.notifications.NotificationOptions<true> = {
    type: `basic`,
    title: `Hello World`,
    message: `This is a notification from the content script.`,
    iconUrl: chrome.runtime.getURL(`../icons/icon-128.png`),
  };
  chrome.notifications.create(notificationOpts);
};

chrome.runtime.onMessage.addListener(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (request: Message, sender, sendResponse) => {
    if (request.message) {
      createNotification();
    }
  }
);

export {};
