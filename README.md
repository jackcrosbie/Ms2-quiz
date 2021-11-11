# Jack's Fun Quiz!
Jack's fun quiz is a simple general knowledge quiz build using html, css and JavaScript.
The questions are randomly generated from a preset list so the idea is that the quiz can be played numerous times and be provided with, somewhat, different questions.
There is a score counter in the top right corner for you to keep track of how you're doing.
You're awarded 10 points per correct answer and 0 points for an incorrect answer.
I hope to keep adding more questions to the quiz to enable users to return at a later date with new questions.
Jack's fun quiz is made for people who want to kill a little time, test their knowledge and have a little fun.

![homepage_screenshot](https://github.com/jackcrosbie/Ms2-quiz/blob/9be3a9b969758363b25ddce7c912320a5155c1a5/docs/homepage_screenshot.JPG)
![mobile_homepage_screenshot](https://github.com/jackcrosbie/Ms2-quiz/blob/7dab1c91f69bc1e223ec2489882cfd3bc12efe12/docs/mobile_homepage_screenshot.JPG)
![tablet_homepage_screenshot](https://github.com/jackcrosbie/Ms2-quiz/blob/7dab1c91f69bc1e223ec2489882cfd3bc12efe12/docs/homepage_tablet_screenshot.JPG)

Live website can be found here: https://jackcrosbie.github.io/Ms2-quiz/

## Wireframes

Large Screen Wireframes:

![Wireframe Large Screen Homepage](https://user-images.githubusercontent.com/82109134/129175217-5245f328-1ebf-4185-bb0e-f4e164291046.png)
![Wireframe Large Screen Quiz Page](https://user-images.githubusercontent.com/82109134/129175242-bab3bd0a-5865-4eb0-a1bf-30ae8bb64cae.png)
![Wireframe Large Screen End Page](https://user-images.githubusercontent.com/82109134/129175753-e36284bf-287e-4fac-9e33-f0769c3fad02.png)

Medium Screen Wireframes:


![Med Screen Wireframe Homepage](https://user-images.githubusercontent.com/82109134/129125467-d220890e-30a3-4faf-bf65-f6a0b1914e84.png)
![Med Screen Wireframe Quiz Page](https://user-images.githubusercontent.com/82109134/129125477-17546794-02ad-496a-9fcc-0436a97f249d.png)
![Med Screen Wireframe End Page](https://user-images.githubusercontent.com/82109134/129125479-ae883fc6-c4b4-4d27-b4dd-a386df97af45.png)

Small Screen Wireframes:


![Small Screen Wireframe Homepage](https://user-images.githubusercontent.com/82109134/129125831-45894097-fdb5-4c37-89fa-80fdf204ae34.png)
![Small Screen Wireframe Quiz Page](https://user-images.githubusercontent.com/82109134/129125834-440af99c-f84f-4c23-b1a3-d677bec9212f.png)
![Small Screen Wireframe End Page](https://user-images.githubusercontent.com/82109134/129125838-fde4afd8-06c0-45cb-9db1-4ea25e961e22.png)

## Site Goals

The website is intended to be a simple fun quiz users can partake in to relax and have fun. The questions are pulled at random from an array which means the quiz is replayable. Each question has 4 multiple choice answers with only one of them being correct. I chose not to give the user the right answer if they got a question wrong so if they replay the quiz and that question is selected they don't know the answer after getting it wrong.

## Features
The general design for the website is very simple. The general 'childlike' look to the webstie is supposed to mirror it's fun easy going purpose. The use of 'Londrian Outline' for the bubble letter almost gives it a childs art feel.
The homepage (pictured above) has a simple title, coloured container for desin and a 'Start Quiz' button.
Through JavaScript when you push the 'Start Quiz' button it begins the process of randomly generating a question from the array and brings you to the game page to begin the quiz.
* Progress Bar
  The progress bar increases as you answer each question to show how long you have till it's over.
  It fills with a green color and when full you get the final question of the quiz.
 
 ![Progress Bar](https://github.com/jackcrosbie/Ms2-quiz/blob/a38ca82164506246c54b3bf90687a3c4f075ca4f/docs/progress_bar.JPG)

 * Score Counter
   For each question you get right in the quiz you are award 10 points. I coded a counter into the top right corner that updates after every correct or incorrect answer.
   Ideally this will produce your total score when you complete the quiz but this is a feature I have yet to implement.

![Score Counter](https://github.com/jackcrosbie/Ms2-quiz/blob/a38ca82164506246c54b3bf90687a3c4f075ca4f/docs/score_counter.JPG)

* Interative Answer Buttons
  The buttons on the website are the most complex elements of the entire website. When selecting an answer whichever answer button is hovered over changes colour to indicate to the user they are selecting that button. Once the button is pressed it triggers a process where the JavaScript element checks if the correct or incorrect answer has been selected. If correct the button then tells in the score element to add ten points to the counter and also ask for another question to be randomly generated from the array of questions. The answer button will light up green if the correct answer is selected or red if the incorrect answer is selected.
  
![2021-08-12 (2)](https://user-images.githubusercontent.com/82109134/129121416-7d858818-397c-42ea-8f49-cb0d6e0573fa.png)

On the final end page of the quiz you get two buttons and a message thanking you for playing. Once to replay the quiz and another to bring you back to the home page. These buttons when hovered over slight grow in size and have a shadow around the edge to show you this is the button you are going to select. The play again button restarts the JavaScript loop, sending the score counter back to zero and starting the random question generator again.

![End buttons](https://github.com/jackcrosbie/Ms2-quiz/blob/979be43ab9723473c62ab66dee47d7e3ab16c6b6/docs/endpage_screenshot.JPG)

## Features Left to Implement
* At the moment your score at the end of the game isn't shown on the end page. This is something I would like to add in in future.
* Another feature I would like to add is a place to save your score and have a record of previous highscores.
* I would like to keep adding questions to the array. At the moment there is only 12 questions into the array. I plan to gather more multiple choice questions and add them in in future.
* Another feature I considered implementing was a timer feature so you only had 10 or 15 seconds to answer each question. This would stop users from being able to find out the answers before answering the questions through searching online etc.
* The final feature I would've like to implement is some sort of soundscape for the quiz and would potentially place a certain noise if you got the correct answer (crowd cheers possibly) and another for when the wrong answer was picked, think sad trombone, or something similar.

## Testing

### Automated Testing

* HTML: I ran all three pages of my HTML code through the W3C HTML Validator. Each of the three pages passed with no errors occuring.

![HTML validator result](https://github.com/jackcrosbie/Ms2-quiz/blob/104e61b627bd18580b175816251409da48384187/docs/html_validator_result.JPG)

* CSS: When i ran both my css files through the css validator they both came back with "Congratulation! No Error Found.".

![CSS validator result](https://github.com/jackcrosbie/Ms2-quiz/blob/104e61b627bd18580b175816251409da48384187/docs/css_validator_result.JPG)

* JavaScript: When running my JavaScript through a validator it returned a number of small errors. Mainly missing semi-colons and untidy syntax. After cleaning all this up I was still left with two errors. They were as follows:

![JavaScript Error](https://user-images.githubusercontent.com/82109134/129123773-9d5d3462-36a7-4ccb-af80-e5cbca4e6ee7.png)

I spent a bit of time looking at my JavaScript code and trying to figure out what the issue was.
If i commented out the code and ran my preview the quiz stopped working as it allow a user to submit an awswer. Clicking on one of the answers failed to provide any result.
I have since had to conclude that it is working to the level I want it to and is important to my JavaScript code.
This is something I will seek future guidance on as it has puzzled me.

## Manual Testing

After sorting all the errors I could when using the automated online validators I begin manually testing my website to ensure the site was working overall as intended, the individual features I implemented were working and the responsiveness worked for various devices.

### Buttons

I first went to ensure all the buttons on the site were working as intended. As this was a multiple choice quiz the buttons were integral to the performance of the website.

* Start Button: The first button, located on the homepage, is the "Start Quiz!" button. This button click begins the entire quiz and generates the first question.
I clicked this button when testing and it immediately acted as intended generating the first question and moving you onto the main quiz page.

![start button](https://github.com/jackcrosbie/Ms2-quiz/blob/104e61b627bd18580b175816251409da48384187/docs/start_button.JPG)
  
 * Correct Answer Button: I next tested to see if the answer buttons, for the questions, were working as intended. I pick the correct answer to the first question. The answer button turned green to indicate the user had answered correctly and it proceeded to load the next question in the quiz. This is exactly how I expected it to react. I repeated this process a couple more times to ensure it was consistently working. Everything was working okay so I moved on with my testing.

![correct answer button](https://github.com/jackcrosbie/Ms2-quiz/blob/301f8f9c58f63f197f8af8261af7a22cb19a42ff/docs/correct_answer_button.png)

* Wrong Answer Button: Just like the correct answer button I tested whether the wrong answer button worked as intended. I chose the wrong answer to the next question to test what happened. The button reacted just as I had hoped, it turned red to indicate a wrong answer and then proceeded to load the next question. I repeated this process a few more times and then moved on when I ascertained everything was working as I had hoped.

![wrong answer button](https://github.com/jackcrosbie/Ms2-quiz/blob/104e61b627bd18580b175816251409da48384187/docs/wrong_answer_button.png)

* End Buttons: The last buttons I had to test, as part of my testing, were the two buttons at the end of the quiz. One of these buttons was to bring you back to the homepage while the second brought you back to the start of the quiz. I clicked both these buttons multiple times to ensure it brought you to the intended location. Both buttons did this on every click so I was able to ascertain that all the buttons on my site were working exactly how I had planned them to work.

![end buttons](https://github.com/jackcrosbie/Ms2-quiz/blob/104e61b627bd18580b175816251409da48384187/docs/end_buttons.JPG)

* Button Features: Once I had checked all the buttons worked on the basic functional level I went to test  the features I had implemented through CSS for the buttons. I first checked to ensure the hover feature worked when selecting one of the buttons. I hovered my cursor over various buttons (start buttons, answer buttons and the end buttons). Each time I did the button in question grew slightly in size and had a shading effect around it. This told me my transition, transform and box-shadowing properties were working as I had intended. Below is the same button with no hover feature in the first picture and the hover feature in the second picture

![start buttong no hover](https://github.com/jackcrosbie/Ms2-quiz/blob/104e61b627bd18580b175816251409da48384187/docs/start_button.JPG)
![start button with hover](https://github.com/jackcrosbie/Ms2-quiz/blob/104e61b627bd18580b175816251409da48384187/docs/hover_button_effect.png)

Next I tested to see If the hover colour change feature was working on the answer buttons. When an answer button was being hovered on I was meant to turn yellow to indicate to the user this was the answer they were about to select. I tested multiple answers buttons for various questions. Each time the button reacted as I had hoped by the background colour turning yellow when hovered over. I concluded this feature was working and moved on with my testing.

![answer_button_hover](https://github.com/jackcrosbie/Ms2-quiz/blob/104e61b627bd18580b175816251409da48384187/docs/colour_change_hover.png)

* Progress Bar: Once I had ensured the buttons were working correctly I moved onto my next feature which was the progress bar. The progress bar was supposed to start empty and fill as each question was answered. Once the bar was full it indicated you were on your final question.

![empty progress bar](https://github.com/jackcrosbie/Ms2-quiz/blob/104e61b627bd18580b175816251409da48384187/docs/empty_progress_bar.JPG)
![full progress bar](https://github.com/jackcrosbie/Ms2-quiz/blob/104e61b627bd18580b175816251409da48384187/docs/full_progress_bar.JPG)

* Progress Bar Bug: After running through the quiz a few times the progress bar was filling too quickly and it was full on the second last question. This was an not what I had intended to happen and was a bug. I reviewed my JavaScript code and upon consultation with my mentor I was able to figure out I had the questionCounter variable too early in the function meaning it was filling the progress bar before the question had been answered. When I moved this variable to the end of the getNewQuestion function it then starting working as I had hoped.

* Score Counter: The score counter is there to track each users score as they go through the quiz. If a question is answered correctly then the score counter should go up by 10 points and if the question is answered incorrectly there should be no change on the score counter. The counter should start at 0 on question one. After running the quiz numberous times the score counter behaved exacly as it was supposed to, incrementing by 10 when a question was answered correctly and staying unchanged when answered incorrectly.

![score counter](https://github.com/jackcrosbie/Ms2-quiz/blob/104e61b627bd18580b175816251409da48384187/docs/score_counter_0.JPG)

* Responsiveness: Once I was happy all the elements of my website were working correctly I begin checking the responsiveness of the site. I did this by using the inspect option on google chrome and choosing various screen sizes. After checking all of the dimensions available I was happy with the level of responsiveness shown by the website. It works well for mobile, tablet and large screen devices. While testing the responsiveness I came across a bug with the buttons when being used for mobile and tablet sized screens.

* Button Bug for Smaller Screens: When testing the responsiveness I ran into the issue that due to these screens not having a cursor the hover feature was bugged. When you selected an answer for a question the button stayed highlighted for the next question as if it was being hovered over. This was distracting and confusing for the user. In order to fix this I simply removed the hover effect code from my base code and added it to media queries for larger screened devices, which would predominately be used with a mouse. This meant the hover feature for the answer buttons, size change and background colour change, only come into effect for larger screens and isn't used on smaller screens that are usually touch based.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
* In the GitHub repository, navigate to the Settings tab
![github_settings_tab](https://github.com/jackcrosbie/Ms2-quiz/blob/c241d6bc8f0cc9841cf3c9f3f49f23e6fc078f7b/docs/github_settingstab.png)

* In settings find pages option from menu on the left

![github_pages_tab](https://github.com/jackcrosbie/Ms2-quiz/blob/c241d6bc8f0cc9841cf3c9f3f49f23e6fc078f7b/docs/pages_github.png)


* From the source section drop-down menu, select the Main Branch
* Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

![github_branch_settings](https://github.com/jackcrosbie/Ms2-quiz/blob/c241d6bc8f0cc9841cf3c9f3f49f23e6fc078f7b/docs/github_settings.png)
The live link can be found here - https://jackcrosbie.github.io/Ms2-quiz/

## Credits

The basis of my code was altered from three various videos on youtube. They are
1) https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=15s
2) https://www.youtube.com/watch?v=riDzcEQbX6k&t=1227s
3) https://www.youtube.com/watch?v=pQr4O1OITJo&t=15s

These videos helped me gain ideas for features and ways of implementing them using JavaScript and CSS.

Validators Used:
HTML - https://validator.w3.org/

CSS - https://jigsaw.w3.org/css-validator/

JavaScript - https://jshint.com/

I also utilised articles on w3schools and stack overflow to help me with various issues while coding this project.

## Acknowledgements

Help was provided to me by colleague, Daisy Gunn, on Slack and I would like to acknowledge my previous mentor, Aaron Sinnott, and my current mentor, Daisy McGirr, for their help, advice and support.


