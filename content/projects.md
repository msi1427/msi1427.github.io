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

### Anime vs Animation vs CGI

### Omdena Equilo Project

### Explainability of Hate Speech and Reduction Recommender

### COVID-19 Public Policy Stance Analysis

### Original Transformer for Bengali Translation

### Adobe Premiere Plugin for Automated Video Editing

### End-to-End Natural Language Understanding Pipeline for Conversational Agents for Bangladesh

### Real-time License Plate Recognition System for Low Resource Video-based Applications

### Real-Time Face Recognition System for Remote Employee Tracking -->

### Automatic Radiology Report Generation
<table>
<tr><td>
<b>Timeline:</b> January 2021 - Present <br/>
<b>Motivation:</b> From the beginning of 2020, we are in a pandemic situation. The condition is much worse in 3rd world countries like Bangladesh. I and my friend, <a href="https://www.researchgate.net/profile/Abir-Azad">Abir Azad</a>, were trying to contribute somehow to the case. We found out that most of the diagnosis reports come out late because of human latency. There are much more patients than doctors, nurses, and health workers. We were looking to contribute to automatic diagnosis report generation research and found <a href="https://physionet.org/content/mimic-cxr/2.0.0/">MIMIC-CXR</a> dataset by Johnson et. al. dealing with radiology report generation. We presented this issue to our Pattern Recognition project supervisor, <a href = "https://cse.iutoic-dhaka.edu/profile/sabbir/educations">Sabbir Ahmed</a>. Under his supervision, we started working on this problem. <br/>
<b>Problem Statement:</b> Given an X-Ray image can the machine learn to understand and generate a medical report from it? <br/>
<b>Methodology:</b> To get access to the database, we needed to pass <a href="images/certificates/citi_certificate.pdf"><b>CITI certification</b></a> test so that someone using the dataset understand the implications and ethics of using it. After that, we were given access by the database moderators. The dataset was challenging and required a huge understanding of details. We analyzed and process the dataset but could not use the full version because of hardware deficiencies. For generation task, we used <a href="https://arxiv.org/pdf/2010.11929.pdf">Vision Transformer</a> by Dosovitskiy et. al. as an encoder to understand the X-Ray images. and Transformer Decoder for generation task. Our intuition behind using Vision Transformer(ViT) was that ViT divides images into patches that might recognize better localized spatial structure which is necessary for X-Ray images. Our whole system was end-to-end. <br/>
<b>Results:</b> <br/>
<b><i> Point to be noted :: This project is still a work in progress. The results shown below are on our baseline approach. <br/>
We are working with our supervisor for better explainable results. </i></b> <br/>
<img src="projects/radiology-report-gen/arch.PNG" width=23%>
<img src="projects/radiology-report-gen/results.PNG" width=70%><br/>
<b>My Contribution:</b> I am working on the model architecture and how to make the results explainable. <br/>
<a href="projects/radiology-report-gen/Project_Baseline_Report.pdf"> <div class="button"> <b>Detailed Report</b> </div> </a>
<a href="projects/radiology-report-gen/baseline_report_presentation.pdf"> <div class="button"> <b>Walkthrough</b> </div> </a> 
</td></tr>
</table>

### Medical Expertise Style Transfer System for Layman Patients
<table>
<tr><td>
<b>Timeline:</b> October 2020 - Present <br/>
<b>Motivation:</b> There is always a big communication gap between experts and laymen in any domain. In the medical domain, this problem is considered high stakes because patients who are not experts need to understand what the doctor prescribes them. Moreover, this problem is not localized, it is worldwide. For our undergraduate dissertation, I and my teammates conducted research on expertise style transfer in the medical domain upon discussion with our supervisor, <a href="https://cse.iutoic-dhaka.edu/profile/kamrul/educations">Dr. Kamrul Hasan</a>.  <br/>
<b>Problem Statement:</b> Given an expert style text can the machine learn to transfer it into layman style preserving the content? <br/>
<b>Methodology:</b> We started exploring the most recent Medical Expertise Style Transfer dataset, <a href="https://aclanthology.org/2020.acl-main.100.pdf">MSD Dataset</a>, by Cao et. al. We came up with an approach like "Fill in The Blanks". Using an expertise classifier, we were masking expert words. Using a language model finetuned on laymen corpus, we were filling the gaps with the most relevant words. This method gave up competitive performance but not the best. We are currently looking into a data-centric active learning approach to make this task more tractable and efficient. <br/>
<b>Results:</b> <br/>
<b><i> Point to be noted :: This project is still a work in progress. The results shown below are on our previous "Fill in the Blanks" approach.</i></b> <br/>
<img src="projects/medical-tst/results.PNG" width=67%><br/>
<img src="projects/medical-tst/success.PNG" width=45%>
<img src="projects/medical-tst/failure.PNG" width=41.5%><br/>
<b>My Contribution:</b> I am mainly working on the active learning data-centric pipeline.<br/>
<a href="projects/medical-tst/medical_tst_report.pdf"> <div class="button"> <b>Detailed Report</b> </div> </a>
<a href="https://github.com/msi1427/Medical-Expertise-Style-Transfer-System-for-Layman-Patients"> <div class="button"> <b>GitHub Repo</b> </div> </a>
<a href="projects/medical-tst/medical_tst_pres.pdf"> <div class="button"> <b>Walkthrough</b> </div> </a> 
</td></tr>
</table>

### Multimodal Multi-label Genre Classifier
<table>
<tr><td>
<b>Timeline:</b> August 2020 - September 2020 <br/>
<b>Motivation:</b> I used to watch a lot of movies and series back then and I was a regular at IMDb. I used to read layman and critic reviews, sometimes write constructive reviews myself, read plot summaries, and sometimes write the plot summaries if the summaries were not present there. One day, I noticed that we can infer the genres just by reading the plot summaries most of the time. From this intuition, I and some of my friends started exploring this. After exploring, we found out that sometimes the title poster can be also useful for this. For example, we cannot infer if a movie is of 'Animation' genre just by reading the plot. To investigate this further, we discussed the finding with our project supervisor of the Machine Learning course, <a href="https://cse.iutoic-dhaka.edu/profile/hasan/educations">Professor Hasan Mahmud</a>. We finalized this topic as our term course project. <br/>
<b>Problem Statement:</b> Given a title poster and plot summary of a movie or series, can machine identify the genres with high accuracy? <br/>
<b>Methodology:</b> First of all, we collected a list of movies and series and their corresponding IMDb URLs from a verified IMDb list. Using the URLs, we scraped the title posters and plot summaries. We worked on 3 types of models in total. For the image modality we used Resnet-50 pretrained on ImageNet and For the text modality we used Bi-LSTM (<a href="https://arxiv.org/pdf/1801.06146.pdf">UMLFit</a>) pretrained on Wikipidea. To find out if using both modalities really make any difference, we fine-tuned Resnet-50 only on the posters, Bi-LSTM on the plot summary and custom Model (Resnet-50 + BiLSTM) was on both modalities. We used accuracy and F1-score (because of imbalanced class problem) as metric.<br/>
<b>Results:</b><br/> 
Resnet-50 was fine-tuned only on the posters, LSTM was fine-tuned on the plot summary. Custom Model (Resnet-50 + BiLSTM) was trained on both modalities. <br/>
From here, we can come to two conclusion (1) the genres can be inferred from plot summaries (2) using image modality here can boost the performance.<br/>
<img src="projects/genre-classifier/Data Distribution.PNG" width=37%>
<img src="projects/genre-classifier/Results.png" width=50%><br/>
<b>My Contribution:</b> I worked on all parts of the whole project. As it was a team-work, my main focus was on designing and training the machine learning models while my teammates focused on other parts.  <br/> <br/>
<a href="projects/genre-classifier/Project Report.pdf"> <div class="button"> <b>Detailed Report</b> </div> </a>
<a href="https://github.com/msi1427/Multimodal-Multi-label-Genre-Classifier"> <div class="button"> <b>GitHub Repo</b> </div> </a>
</td></tr>
</table>

### Second Nurse Care Activity Recognition Challenge 2020
<table>
<tr><td>
<b>Timeline:</b> June 2020 - September 2020 <br/>
<b>Motivation:</b> After the completion of our Gesture Recognition project, we (me and my teammate <a href="https://www.researchgate.net/profile/Abir-Azad">Abir Azad</a>) were acquainted with sensor data. And by this time, we also completed the online course on <a href="https://www.coursera.org/learn/machine-learning">Machine Learning</a> and <a href="https://www.coursera.org/specializations/deep-learning">Deep Learning </a> by <a href="https://www.andrewng.org/">Andrew Ng</a>. We had the basic knowledge of machine learning but we did not have enough practical knowledge. Since we were acquainted with ML and accelerometer data, <a href="https://cse.iutoic-dhaka.edu/profile/lota/educations">Professor Lota</a> recruited us in her team of participants in the **[Second Nurse Care Activity Recognition Challenge 2020](https://abc-research.github.io/nurse2020/)**. Our team name was **Moonshot_BD**<br/>
<b>Problem Statement:</b> Given the sensor data from the accelerometer with time used by nurses in elder care homes and the manual timetable of different activities by the nurses, is it possible to automate the time-tracking process with high efficiency. <br/>
<b>Approach:</b> The challenge provided us with two raw datasets. One dataset was containing the accelerometer data (x,y,z-axis) with day and time used by the nurses. Another one contained the start and end of an activity. The dataset was imbalanced and small. First of all, we merged using the start and end times of the second dataset. The resulted dataset contained the accelerometer data (x,y,z-axis) and the activity labels. Then we extracted different features from the data. We trained our models using the features. Since the data was small, we only tried out traditional machine learning models like KNNs, Naive Bayes, Random Forest, SVM, and basic MLP. Our intuition behind not using more parameterized models was that the model might overfit. And since we just had one chance to submit the results, we did not take the chance. When the result got published our suspicion was correct. Our basic MLP won the challenge leaving behind several overly parameterized models. Later we published and presented our work in <b><a href="https://ubicomp.org/ubicomp2020">UbiComp/ISWC HASCA 2020</a></b>. <br/>
<b>Results:</b> <a href="https://abc-research.github.io/nurse2020/results/"><b>Result Announcement Link</b></a> <br/>
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
*Detailed report can be found <b><a href="/projects/gesture-rec-myo/Project Report.pdf">here</a></b>.* (This was my first academic project report. So please bear with our amateur inconsistencies and errors.) <br/>
</td></tr>
</table>