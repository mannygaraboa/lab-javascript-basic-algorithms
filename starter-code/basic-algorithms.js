
var hacker1 = "Steve";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What is your name?");
console.log("The navigator's name is " + hacker2);


function longestName()
{
  if(hacker1.length > hacker2.length)
  {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
  }
  else if(hacker2.length > hacker1.length)
  {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length +  " characters");
  }
  else
  {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
  }
}
longestName();


var hacker1UpperCase = "";
for(var i = 0; i < hacker1.length; i++)
{
  hacker1UpperCase += hacker1[i].toUpperCase() + " "; 
}
console.log(hacker1UpperCase);


function reverseString(string)
{
  var reversed = "";
  for(var i = string.length - 1; i >= 0; i--)
  {
    reversed += string[i]; 
  }
  console.log(reversed);
  return reversed;
}
reverseString(hacker2);


function compare()
{
  if(hacker1.localeCompare(hacker2) < 0)
  {
    console.log("The driver's name goes first");
  }
  else if(hacker1.localeCompare(hacker2) > 0)
  {
    console.log("Yo, the navigator goes first definitely");
  }
  else
  { 
    console.log("What?! You both got the same name?");
  }
}
compare();


var palindrome = prompt("Enter a Palindrome").toLocaleLowerCase().replace(/,| |/g, "");

function checkPalindrome()
{
  var repPal = palindrome;
  var revPal = reverseString(repPal);
  console.log("This is repPal: " + repPal);
  console.log("This is revPal: " + revPal);

  if(repPal == revPal)
  {
    console.log("This IS a palindrome!");
  }
  else
  {
    console.log("This ISN'T a palindrome!");
  }
}
checkPalindrome(palindrome);


var paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices imperdiet venenatis. Integer vehicula scelerisque nibh, tincidunt vehicula lacus feugiat et. Nunc ac erat nec velit cursus finibus id sed enim. Proin vehicula nunc sed mi rhoncus dictum. In nec mauris a ante imperdiet convallis sit amet sit amet odio. Suspendisse sit amet laoreet elit. Etiam sit amet mauris risus. Proin nec mauris felis. In ut accumsan nisl, quis tristique metus. Sed lorem diam, venenatis id sollicitudin sed, pretium id neque. In varius dui vitae augue fermentum, vel tristique turpis feugiat. Quisque id velit interdum, volutpat ipsum in, dictum odio. Pellentesque justo lectus, viverra feugiat nisi ut, aliquet gravida sapien. Nam bibendum consequat consequat. Quisque laoreet varius nunc sed aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse elementum luctus quam, sodales interdum ipsum lacinia nec. Sed venenatis hendrerit risus, ut pharetra lacus interdum nec. Nullam quam nisi, iaculis ac maximus ac, sagittis non arcu. Aliquam a libero pharetra, tristique ex quis, volutpat orci. Duis scelerisque augue nec mauris lacinia pharetra. Vivamus sed lectus et lectus sagittis pulvinar. Proin turpis eros, interdum sit amet tincidunt sed, mattis eu tortor. Suspendisse vel est varius, placerat urna sit amet, ultrices ligula. Fusce vitae porta quam. Aliquam ullamcorper quam sed nibh scelerisque egestas. Nulla tristique molestie dictum. Maecenas euismod varius nulla a sollicitudin. Donec ac enim ut diam volutpat imperdiet. Nulla fringilla commodo enim, ac congue tortor fringilla quis. Duis sagittis luctus augue, tu tempor nisl posuere eu. Etiam rhoncus ante tortor, vitae euismod neque efficitur ac. Vestibulum at mi blandit mauris ultricies tempor. Maecenas sit amet varius neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus dignissim rutrum rutrum."


function countWords()
{
  var numWords = 0;
  for(var i = 0; i < paragraphs.length; i++)
  {
    if(paragraphs[i] == " ")
    {
      numWords++;
    }
  var finalWordCount = numWords + 1;
  }
  console.log("Number of words in these paragraphs: " + finalWordCount);
}
countWords();


function countEt()
{
  var etCount = 0;
  for(var i = 0; i < paragraphs.length; i++)
  {
    if(paragraphs[i] + paragraphs[i+1] + paragraphs[i+2] + paragraphs[i+3 ] == " et ")
    {
      etCount++;
    }
  }
  console.log("Number of times 'et' appears in these paragraphs: " + etCount);
}
countEt(paragraphs);
