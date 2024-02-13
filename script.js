"use strict";

function Television(power, channel) {
  this.power = power;
  this.channel = channel;
}

const tv1 = new Television(true, "CNN");
const tv2 = new Television(false, "BBC");
const tv3 = new Television(true, "ESPN");

Television.prototype.changePower = function () {
  this.power = !this.power;
  console.log(`Television is now ${this.power ? "ON" : "OFF"}`);
};

Television.prototype.changeChannel = function (channel) {
  this.channel = channel;
  console.log(`Television is now on channel ${this.channel} `);
};
Television.prototype.getState = function () {
  if (!this.power) {
    console.log("Please Turn the TV ON");
  } else {
    console.log(
      `Television is now ${this.power ? "ON" : "OFF"} and is on channel ${
        this.channel
      }`
    );
  }
};
tv1.changePower();
tv1.changeChannel("BBC");
tv1.getState();
tv2.changePower();
tv2.changeChannel("CNN");
tv2.getState();
tv3.changePower();
tv3.changeChannel("ESPN");
tv3.getState();
