// Copyright (c) 2024 phoi5675
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Message } from "@/types/common/message";

const insertBtn = () => {
  const button = document.createElement(`button`);

  button.innerHTML = `<h1>click me!</h1>`;
  button.onclick = () => {
    chrome.runtime.sendMessage<Message>({
      type: "NOTIFICATION",
      message: `send notification`,
    });
  };

  document.body.appendChild(button);
};

insertBtn();

export {};
