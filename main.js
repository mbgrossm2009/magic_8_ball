// your code, here
let magic_8_ball = [
'It is certain',
'It is decidedly so',
'Without a doubt',
'Yes, definitely',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Outlook good',
'Yes',
'Signs point to yes',
'Reply hazy try again',
'Ask again later',
'Better not tell you now',
'Cannot predict now',
'Concentrate and ask again',
'Don\'t count on it',
'My reply is no',
'My sources say no',
'Outlook not so good',
'Very doubtful'];
let length = 19;
let randomIndex = (length) => {
  return Math.floor(Math.random() * length);
};

console.log(magic_8_ball[randomIndex(length)]);
