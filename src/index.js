import './index.scss';

const ChatBot = class {
  constructor() {
    this.el = document.querySelector('#app');
  }

  render() {
    return '<h1>Hello world</h1>';
  }

  run() {
    return '';
  }
};

const chatBot = new ChatBot();

chatBot.run();
