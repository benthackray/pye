module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },
  format_choice: (Labels, Choice) => {
    return Labels[Choice];
  },
  format_string: (inputString) => {
    newString = inputString.replace(/&quot;/g,`"`);
    newString = newString.replace(/&#x27;/g,`'`);
    return newString;
  },
  reverse_array: (Input) => {
    console.log("here");
    return Input.reverse();
  },
  toObj: (data) => {
    console.log(JSON.parse(data));
    return JSON.parse(data);
  },
};
