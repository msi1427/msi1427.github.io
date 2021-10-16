---
title: Projects
---
*<b>Please read this before going through the projects.</b> <br/> I could not link the source code to some of the projects below due to client confidentiality or lab confidentiality. Everything related to a particular project is not described to the full extent here. I only discussed the motivation (why and how I or my team started working on this problem), problem statement (what the problem is/was in short), approach (not the formal version, just how I or my team approached the problem), results (final outcome) and my contribution (what exactly I did and learned new from this project). If you like any project below feel free to explore the GitHub repository and, if the link to the repository is not provided here, feel free to contact me for more details.* <br/>

<!-- ### Title
<table>
<tr><td>
<b>Timeline:</b> MM YY - MM YY <br/>
<b>Motivation:</b> <br/>
<b>Problem Statement:</b> <br/>
<b>Methodology:</b> <br/>
<b>Results:</b> <br/>
<img src="" width=43%><br/>
<b>My Contribution:</b> <br/>
<a href=""> <div class="button"> <b>Detailed Report</b> </div> </a>
<a href=""> <div class="button"> <b>GitHub Repo</b> </div> </a>
<a href=""> <div class="button"> <b>Walkthrough</b> </div> </a> 
</td></tr>
</table> -->

<!-- ### Intended Sarcasm Detection in Arabic and English.

### Logical Reasoning Question Answering using Standardized Test Questions

### Data-centric approach for Explainability in Text Classification

### Automatic Radiology Report Generation

### Anime vs Animation vs CGI

### Data-centric Approach towards Medical Expertise Style Transfer

### Omdena Equilo Project

### Automated Data Collection for Abstractive Bangla Text Summarization

### Explainability of Hate Speech and Reduction Recommender

### COVID-19 Public Policy Stance Analysis

### Original Transformer for Bengali Translation

### Adobe Premiere Plugin for Automated Video Editing

### End-to-End Natural Language Understanding Pipeline for Conversational Agents for Bangladesh

### Real-time License Plate Recognition System for Low Resource Video-based Applications

### Real-Time Face Recognition System for Remote Employee Tracking

### Multi-label Genre Classifier -->

### Second Nurse Care Activity Recognition Challenge 2020
<table>
<tr><td>
<b>Timeline:</b> June 2020 - September 2020 <br/>
<b>Motivation:</b> After the completion of our Gesture Recognition project, we (me and my teammate <a href="https://www.researchgate.net/profile/Abir-Azad">Abir Azad</a>) were acquainted with sensor data. And by this time, we also completed the online course on <a href="https://www.coursera.org/learn/machine-learning">Machine Learning</a> and <a href="https://www.coursera.org/specializations/deep-learning">Deep Learning </a> by <a href="https://www.andrewng.org/">Andrew Ng</a>. We had the basic knowledge of machine learning but we did not have enough practical knowledge. Since we were acquainted with ML and accelerometer data, <a href="https://cse.iutoic-dhaka.edu/profile/lota/educations">Professor Lota</a> recruited us in her team of participants in the **[Second Nurse Care Activity Recognition Challenge 2020](https://abc-research.github.io/nurse2020/)**. Our team name was **Moonshot_BD**<br/>
<b>Problem Statement:</b> Given the sensor data from the accelerometer with time used by nurses in elder care homes and the manual timetable of different activities by the nurses, is it possible to automate the time-tracking process with high efficiency. <br/>
<b>Approach:</b> The challenge provided us with two raw datasets. One dataset was containing the accelerometer data (x,y,z-axis) with day and time used by the nurses. Another one contained the start and end of an activity. The dataset was imbalanced and small. First of all, we merged using the start and end times of the second dataset. The resulted dataset contained the accelerometer data (x,y,z-axis) and the activity labels. Then we extracted different features from the data. We trained our models using the features. Since the data was small, we only tried out traditional machine learning models like KNNs, Naive Bayes, Random Forest, SVM, and basic MLP. Our intuition behind not using more parameterized models was that the model might overfit. And since we just had one chance to submit the results, we did not take the chance. When the result got published our suspicion was correct. Our basic MLP won the challenge leaving behind several overly parameterized models. Later we published and presented our work in <b><a href="https://ubicomp.org/ubicomp2020">UbiComp/ISWC HASCA 2020</a></b>. <br/>
<b>Results:</b> [Result Announcement Link](https://abc-research.github.io/nurse2020/results/) <br/>
<img src="projects/nurse-care/announcement.PNG" width=50%><br/>
<b>My Contribution:</b> I worked on all parts of the whole project. But my main focus was on training and testing the machine learning models.<br/><br/>
<a href="https://www.researchgate.net/publication/344271908_Nurse_Care_Activity_Recognition_Based_on_Machine_Learning_Techniques_Using_Accelerometer_Data"> 
<div class="button"> <b>Detailed Report</b> </div> </a>
<a href="https://github.com/msi1427/Second-Nurse-Care-Activity-Recognition-Challenge-2020"> 
<div class="button"> <b>GitHub Repo</b> </div> </a>
<!-- <a href=""> <div class="button"> <b>Walkthrough</b> </div> </a> -->
</td></tr>
</table>

### Gesture Recognition using Myo Band
<table>
<tr><td>
<b>Timeline:</b> January 2019 - May 2019 <br/>
<b>Motivation:</b> The lab I was primarily affiliated with during my undergrad, SSL Lab, has a long-term project in hand to build automated wheelchairs for semi-paralyzed patients. This project deals with many complicated real-life engineering challenges. The head of SSL Lab, <a href="https://cse.iutoic-dhaka.edu/profile/kamrul/educations">Dr. Kamrul Hasan</a>, formulated a sub-problem of this project which was to map the hand gestures with computer keys, and my team with under the supervision of Professor Hasan came up with a solution to solve this problem.<br/>
<b>Problem Statement:</b> Can we map different hand gestures with computer keys and leverage them to automate human-computer interaction? <br/>
<b>Approach:</b> One way to automate the process is to somehow map the muscle movements with computer keys. First of all, we looked into different sensors which can extract the signal from hand muscle movements. The most efficient one was Myo Band. Using the Myo Band, we analyzed the difference in signal distribution for muscle movements of different gestures. We trained a basic MLP using the signals as input and the gestures as labels and the performance were satisfactory. Back then, we were not acquainted with procedures of comparing baselines and related works. Now the challenge was to map the output of the trained MLP with computer keys. We were trying out different methods by none of them were working properly. Then, we got introduced to an open-source library named <a href="https://pyautogui.readthedocs.io/en/latest/">PyAutoGUI</a> which helped us solve the final challenge. Finally, we could use all the keys of the keyboard with hand gestures. And, we played the dinosaur game in Google Chrome when there is no internet connection.<br/>
<b>Results:</b> <a href="https://www.youtube.com/watch?v=n4UVbqCXJlM">Video Link</a><br/>
<img src="/projects/gesture-rec-myo/Stage1.PNG" width=43%><img src="/projects/gesture-rec-myo/Stage2.PNG" width=50%> <br/>
<b>My Contribution:</b> Honestly, my contribution in this project compared to my best friend and teammate, <a href="https://www.researchgate.net/profile/Abir-Azad">Abir Azad</a>, is very little. But I am mentioning this project here because this was my first encounter with research and machine learning which turned out to be my main career focus later. I got to learn many things from this project. Moreover, this project brought my focus back to academia as I could see there are many interesting and challenging real-life problems to be solved.<br/>
*Detailed report can be found <b><a href="/projects/gesture-rec-myo/Project Report.pdf">here</a></b>.* (This was my first academic project report. So please bear with our amateur inconsistencies and errors.)
</td></tr>
</table>