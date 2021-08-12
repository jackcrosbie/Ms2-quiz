# Jack's Fun Quiz!
Jack's fun quiz is a simple general knowledge quiz build using html, css and JavaScript.
The questions are randomly generated from a preset list so the idea is that the quiz can be played numerous times and be provided with, somewhat, different questions.
There is a score counter in the top right corner for you to keep track of how you're doing.
You're awarded 10 points per correct answer and 0 points for an incorrect answer.
I hope to keep adding more questions to the quiz to enable users to return at a later date with new questions.
Jack's fun quiz is made for people who want to kill a little time, test their knowledge and have a little fun.

![Homepage Screenshot](https://user-images.githubusercontent.com/82109134/129120039-06b7deff-d1f9-429d-9ea9-3a5f6d9105ab.png)

## Features
The general design for the website is very simple. The general 'childlike' look to the webstie is supposed to mirror it's fun easy going purpose. The use of 'Londrian Outline' for the bubble letter almost gives it a childs art feel.
The homepage (pictured above) has a simple title, coloured container for desin and a 'Start Quiz' button.
Through JavaScript when you push the 'Start Quiz' button it begins the process of randomly generating a question from the array and brings you to the game page to begin the quiz.
* Progress Bar
  The progress bar increases as you answer each question to show how long you have till it's over.
  It fills with a green color and when full you get the final question of the quiz.
 
 ![Progress Bar](https://user-images.githubusercontent.com/82109134/129120905-91fd4501-da80-45e6-9fbb-0e70298c0ad4.png)

 * Score Counter
   For each question you get right in the quiz you are award 10 points. I coded a counter into the top right corner that updates after every correct or incorrect answer.
   Ideally this will produce your total score when you complete the quiz but this is a feature I have yet to implement.

![Score Counter](https://user-images.githubusercontent.com/82109134/129121036-9d3fef5b-f2f8-430c-bb7b-5e4f6d19912e.png)

* Interative Answer Buttons
  The buttons on the website are the most complex elements of the entire website. When selecting an answer whichever answer button is hovered over changes colour to indicate to the user they are selecting that button. Once the button is pressed it triggers a process where the JavaScript element checks if the correct or incorrect answer has been selected. If correct the button then tells in the score element to add ten points to the counter and also ask for another question to be randomly generated from the array of questions. The answer button will light up green if the correct answer is selected or red if the incorrect answer is selected.
  
![2021-08-12 (2)](https://user-images.githubusercontent.com/82109134/129121416-7d858818-397c-42ea-8f49-cb0d6e0573fa.png)

On the final end page of the quiz you get two buttons. Once to replay the quiz and another to bring you back to the home page. These buttons when hovered over slight grow in size and have a shadow around the edge to show you this is the button you are going to select. The play again button restarts the JavaScript loop, sending the score counter back to zero and starting the random question generator again.

![End buttons](https://user-images.githubusercontent.com/82109134/129121811-514af42f-30d0-4f0b-87ca-79e81b030ce2.png)

## Features Left to Implement
* At the moment your score at the end of the game isn't shown on the end page. This is something I would like to add in in future.
* Another feature I would like to add is a place to save your score and have a record of previous highscores.
* I would like to keep adding questions to the array. At the moment there is only 12 questions into the array. I plan to gather more multiple choice questions and add them in in future.
* Another feature I considered implementing was a timer feature so you only had 10 or 15 seconds to answer each question. This would stop users from being able to find out the answers before answering the questions through searching online etc.
* The final feature I would've like to implement is some sort of soundscape for the quiz and would potentially place a certain noise if you got the correct answer (crowd cheers possibly) and another for when the wrong answer was picked, think sad trombone, or something similar.

## Testing

When testing my HTML in the validator two of my three HTML pages came back showing "no errors or warnings". These were my index.html and end.html files.
However when i ran my game.html through the validator is returned with one error and that was an "empty heading" error.

![HTML error](https://user-images.githubusercontent.com/82109134/129122583-1ae70ba2-d5aa-4314-9a5b-bc8ba763c323.png)

This element is in my code so the h1 style elements could be applied to my questions being generated from the JavaScript array.
It doesn't appear to have any bearing on my code performance but it is something I will definitely look into further and figure out if there's an easy fix which i haven't discovered yet.

When i ran both my css files through the css validator they both came back with "Congratulation! No Error Found.".

When running my JavaScript through a validator it returned a number of small errors. Mainly missing semi-colons and untidy syntax. After cleaning all this up I was still left with two errors. They were as follows:

![JavaScript Error](https://user-images.githubusercontent.com/82109134/129123773-9d5d3462-36a7-4ccb-af80-e5cbca4e6ee7.png)

I spent a bit of time looking at my JavaScript code and trying to figure out what the issue was.
If i commented out the code and ran my preview the quiz stopped working as it allow a user to submit an awswer. Clicking on one of the answers failed to provide any result.
I have since had to conclude that it is working to the level I want it to and is important to my JavaScript code.
This is something I will seek future guidance on as it has puzzled me.

A final bug which seemed to occur in the final hours before my project was submitted is the fact the progress bar is not lining up with the final question.
The progress bar is currently filling to fast. This wasn't an issue for the majority of my time working on the quiz but popped up in the final hours. Try as I might I have not been able to figure out what may have caused this.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
* In the GitHub repository, navigate to the Settings tab
* From the source section drop-down menu, select the Master Branch
* Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here - https://jackcrosbie.github.io/Ms2-quiz/

## Credits

The basis of my code was altered from three various videos on youtube. They are
1) https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=15s
2) https://www.youtube.com/watch?v=riDzcEQbX6k&t=1227s
3) https://www.youtube.com/watch?v=pQr4O1OITJo&t=15s

These videos helped me gain ideas for features and ways of implementing them using JavaScript and CSS.

I also utilised articles on w3schools and stack overflow.

Help was provided to me by colleagues on Slack and I would like to acknowledge my mentor Aaron Sinnott for his help, advice and support.

## Wireframes

Large Screen Wireframes:

![Wireframe Large Screen End Page](https://user-images.githubusercontent.com/82109134/129125251-2e6d9302-6e31-4979-84d6-df7b87d4e365.png)
![Wireframe Large Screen Quiz Page](https://user-images.githubusercontent.com/82109134/129125259-11f9dab0-2f05-4f7f-b970-40784c7c2bf0.png)
![Wireframe Large Screen End Page](https://user-images.githubusercontent.com/82109134/129125267-d55cca41-4539-443b-af36-944e05022d1c.png)

Medium Screen Wireframes:

![Med Screen Wireframe Homepage](https://user-images.githubusercontent.com/82109134/129125467-d220890e-30a3-4faf-bf65-f6a0b1914e84.png)
![Med Screen Wireframe Quiz Page](https://user-images.githubusercontent.com/82109134/129125477-17546794-02ad-496a-9fcc-0436a97f249d.png)
![Med Screen Wireframe End Page](https://user-images.githubusercontent.com/82109134/129125479-ae883fc6-c4b4-4d27-b4dd-a386df97af45.png)

Small Screen Wireframes:

![Small Screen Wireframe Homepage](https://user-images.githubusercontent.com/82109134/129125831-45894097-fdb5-4c37-89fa-80fdf204ae34.png)
![Small Screen Wireframe Quiz Page](https://user-images.githubusercontent.com/82109134/129125834-440af99c-f84f-4c23-b1a3-d677bec9212f.png)
![Small Screen Wireframe End Page](https://user-images.githubusercontent.com/82109134/129125838-fde4afd8-06c0-45cb-9db1-4ea25e961e22.png)

