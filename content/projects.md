---
title: Projects
---

*<b>Please read this before going through the projects.</b> <br/> I could not link the source code to some of the projects below due to client confidentiality or lab confidentiality. Everything related to a particular project is not described to the full extent here. I only discussed the motivation (why and how I or my team started working on this problem), problem statement (what the problem is/was in short), approach (not the formal version, just how I or my team approached the problem), results (final outcome) and my contribution (what exactly I did). If you like any project below feel free to explore the GitHub repository and, if the link to the repository is not provided here, feel free to contact me for more details.* <br/>

<!-- ### Title
<table>
<tr><td>
<b>Timeline:</b> MM YY - MM YY <br/>
<b>Motivation:</b> <br/>
<b>Problem Statement:</b> <br/>
<b>Approach:</b> <br/>
<b>Results:</b> <br/>
<img src="" width=43%><br/>
<b>My Contribution:</b> <br/>
<a href=""> <div class="button"> <b>Detailed Report</b> </div> </a>
<a href=""> <div class="button"> <b>GitHub Repo</b> </div> </a>
<a href=""> <div class="button"> <b>Walkthrough</b> </div> </a> 
</td></tr>
</table> -->

<!-- 
### Intended Sarcasm Detection in Arabic and English

### Logical Reasoning Question Answering using Standardized Test Questions

### Data-centric approach for Explainabile Text Classification 

### Mitigating Social Bias in NLP

### Data-Centric Approach for Medical Expertise Style Transfer

### Negative Data Augmentation for NLP

### Radiology Report Generation

### Query-focused Text Summarization for Bangla
-->

### Omdena Equilo Project
<table>
<tr><td>
<b>Timeline:</b> April 2021 - June 2021 <br/>
<b>Motivation:</b> I got selected for Omdena Equilo Project after an interview. Back then, most of my NLP knowledge was theoretical or on a small or mid scale project. I wanted to learn how things work on a large scale projects. Besides, the problem was interesting. More about the project can be found in my <a href="#omdena"><b>Omdena Blog</b></a>. <br/>
<b>Results:</b> In summary, we built a pipeline to systematically understand the gender inequality in organizations and recommend actions to prevent them. <br/>
<img src="projects/omdena-equilo/pipeline.png" width=60%><br/>
<a href="projects/omdena-equilo/unofficial_omdena_article.pdf"> <div class="button"> <b>Detailed Report</b> </div> </a>
</td></tr>
</table>

### Medical Expertise Style Transfer System for Layman Patients
<table>
<tr><td>
<b>Timeline:</b> October 2020 - March 2021 <br/>
<b>Motivation:</b> There is always a big communication gap between experts and laymen in any domain. In the medical domain, this problem is considered high stakes because patients who are not experts need to understand what the doctor prescribes them. Moreover, this problem is not localized, it is worldwide. For our undergraduate dissertation, I and my teammates conducted research on expertise style transfer in the medical domain upon discussion with our supervisor, <a href="https://cse.iutoic-dhaka.edu/profile/kamrul/educations">Dr. Kamrul Hasan</a>.  <br/>
<b>Problem Statement:</b> Given an expert style text can the machine learn to transfer it into layman style preserving the content? <br/>
<b>Approach:</b> We started exploring the most recent Medical Expertise Style Transfer dataset, <a href="https://aclanthology.org/2020.acl-main.100.pdf">MSD Dataset</a>, by Cao et. al. We came up with an approach like "Fill in The Blanks". Using an expertise classifier, we were masking expert words. Using a language model finetuned on laymen corpus, we were filling the gaps with the most relevant words. This method availed competitive performance but not the best in all metrics. <br/>
<b>Results:</b> <br/>
<img src="projects/medical-tst/results.PNG" width=67%><br/>
<img src="projects/medical-tst/success.PNG" width=45%>
<img src="projects/medical-tst/failure.PNG" width=41.5%><br/>
<b>My Contribution:</b> I mostly worked on the model designing approaches.<br/><br/>
<a href="projects/medical-tst/medical_tst_report.pdf"> <div class="button"> <b>Detailed Report</b> </div> </a>
<a href="https://github.com/msi1427/Medical-Expertise-Style-Transfer-System-for-Layman-Patients"> <div class="button"> <b>GitHub Repo</b> </div> </a>
<a href="projects/medical-tst/medical_tst_pres.pdf"> <div class="button"> <b>Walkthrough</b> </div> </a> 
</td></tr>
</table>

### COVID-19 Public Policy Stance Analysis
<table>
<tr><td>
<b>Timeline:</b> March 2021 - Present <br/>
<b>Motivation:</b> <a href="https://www.fordham.edu/info/29708/affiliates_for_research_consortium_on_disability/12021/ruhul_amin">Dr. Ruhul Amin</a> from Fordham University had an opening in his lab, <b>Fordham Human Centered AI Research Lab</b>, for this project. The problem seemed really interesting to me and I reached out to him. After a brief interview, we started working on the problem. As the project progressed, we have two more awesome collaborators, <a href="https://www.cs.cmu.edu/~akhudabu/">Dr. Ashique Khudabukhsh</a> and <a href="https://styx97.github.io/">Rupak Sarkar</a>. I am learning a lot working with them. <br/>
<b>Problem Statement:</b> Is it possible to analyze the public stance on COVID-19 policies and the implications of it? <br/>
<i><b>Since this is a work in progress, the details will be here after the completion of the project.</b></i>
<!-- <b>Approach:</b> <br/>
<b>Results:</b> <br/>
<img src="" width=43%><br/>
<b>My Contribution:</b> <br/>
<a href=""> <div class="button"> <b>Detailed Report</b> </div> </a>
<a href=""> <div class="button"> <b>GitHub Repo</b> </div> </a>
<a href=""> <div class="button"> <b>Walkthrough</b> </div> </a>  -->
</td></tr>
</table>

### End-to-End Natural Language Understanding Pipeline for Conversational Agents
<table>
<tr><td>
<b>Timeline:</b> March 2021 - September 2021 <br/>
<b>Motivation:</b> I got the opportunity to supervise this project during my time at Pioneer Alpha and I gladly took the opportunity as this project dealt with NLU in low-resource language like Bangla. NLU itself is a challenging NLP domain when a low-resource language is added it gets more challenging. The client of this project was Amar iSchool and my other two amazingly gifted collaborators were <a href="https://www.researchgate.net/profile/Fahim-Khan-36">Fahim Shahriar Khan</a> and <a href="https://www.researchgate.net/profile/Mueeze-Mushabbir">Mueeze Al Mushabbir</a>. <br/>
<b>Problem Statement:</b> Using low-resource and skewed Bangla dataset for intent recognition and entity extraction, can we build an end-to-end multi-lingual (Bangla, Bangla Transliteration in English and English) conversational agent which can receive messages and send responses seamlessly as a Business Assistant for any business in Bangladesh?<br/>
<b>Approach:</b> For this project, we had to work on the whole machine learning pipeline from Data Collection, Data Cleaning, ML Modeling to Deployment. We got a list of FAQs and their relevant answer from Amar iSchool employees. These FAQs were further analyzed, verified and annotated with entity and intent by our data analysts. We fine-tuned the <a href="https://arxiv.org/pdf/2004.09936.pdf">DIET architecture</a> on out dataset. For the whole process we used the <a href="https://rasa.com/">Rasa Open Source Framework</a> which also helped us achieve real-time performance through seamless processing. We also built a web app for the end-to-end interaction which will be used as a service provider for Bangladeshi clients.<br/>
<b>Results:</b> <br/>Our work was accepted in <a href="https://www.icmla-conference.org/icmla21/index.html">IEEE ICMLA 2021</a> for oral presentation and based on this work we reached the final round of <a href="https://bangla.gov.bd/aiforbangla/"> AI For Bangla Challenge 2021</a>. <br/>
<img src="projects/rasa-nlu/example.PNG" width=50%><br/>
<b>My Contribution:</b> I was the supervisor of this project.<br/>
<a href="https://arxiv.org/pdf/2107.05541.pdf"> <div class="button"> <b>Detailed Report</b> </div> </a>
<!-- <a href=""> <div class="button"> <b>GitHub Repo</b> </div> </a>
<a href=""> <div class="button"> <b>Walkthrough</b> </div> </a>  -->
</td></tr>
</table>

### Real-time Bangla License Plate Recognition System for Low Resource Video-based Applications
<table>
<tr><td>
<b>Timeline:</b> March 2021 - October 2021 <br/>
<b>Motivation:</b> I was introduced to this project during my time at Pioneer Alpha Ltd. I always look for opportunities to contribute to low resource and real-time research especially in my native language because these types of projects have a direct impact on society. Luckily I was appointed as the supervisor of this project. I had the opportunity to supervise two of my amazingly talented colleagues, <a href="https://www.researchgate.net/profile/Alif-Ashrafee">Alif Ashrafee</a> and <a href="https://www.researchgate.net/profile/Akib-Khan-5">Akib Mohammed Khan</a>, throughout the project. <br/>
<b>Problem Statement:</b> Given a video feed of cars and motorcycles having Bangla license plates, can we teach the machine to identify and recognize license plate text? <br/>
<b>Approach:</b> First of all, we collected necessary data. We compiled two types of datasets. One was images containing Bangla License Plates across Dhaka City and another was of videos from all over Bangladesh containing license plates. Thanks to the amazing Amar iSchool volunteers who helped us in this process. We used the image dataset for training and the video dataset was used for testing. Then, we manually drew bounding boxes of the images to train a license plate detector model. But all the models we were training were not achieving real-time inference speed. So, we used a weak binary classifier model trained on negative and positive samples of license plates as a wakeup mechanism which was used to invoke the bigger model. After this, there were two more stages that finally resulted in successful recognition. Our final pipeline (Cascade + SSDv2 + Vision API) achieved real-time speed with high accuracy. We also built a web app for the interaction which will be used as a service provider for Bangladeshi clients.<br/>
<b>Results:</b> We presented our work in <a href="https://confbim.com/">BIM 2021</a>. <br/>
<img src="projects/license-plate/pipeline.PNG" width=50%><br/>
<b>My Contribution:</b> I was the supervisor of this project.<br/>
<a href="https://arxiv.org/pdf/2108.08339.pdf"> <div class="button"> <b>Detailed Report</b> </div> </a>
<!-- <a href=""> <div class="button"> <b>GitHub Repo</b> </div> </a>
<a href=""> <div class="button"> <b>Walkthrough</b> </div> </a>  -->
</td></tr>
</table>

### Adobe Premiere Plugin for Automated Video Editing
<table>
<tr><td>
<b>Timeline:</b> July 2021 - October 2021 <br/>
<b>Motivation:</b> This was a client project during my time at Pioneer Alpha. My colleague for this project was Fahim Rahman. <br/>
<b>Problem Statement:</b> Given some family photos and videos of their family events like weddings, we need to return the portion of the videos where the family members appear and also the appearance stats. <br/>
<b>Approach:</b> We already had a face detection system up and running. We used the same system to detect the faces and then cropped the detected portions to generate thumbnails. For the latter part, we ran a frame-by-frame recognition and kept a count of the face stats on the way. We also kept track of which face appeared when. The consecutive timelines were merged and used as a range to crop the videos automatically. The timeline was sent back to the remote user. The main challenge of this project was to integrate the machine learning pipeline with the Adobe Premiere Plugin in real-time. We were able to face the challenges, complete the project and deliver the project successfully to the client. <br/>
<img src="projects/adobe-plugin/arch.png" width=65%><br/>
<b>Results:</b> The result snippets are not provided here due to client confidentiality. <br/>
<b>My Contribution:</b> I worked on the local machine part of this project while my other colleague worked on the plugin part. <br/>
<a href="https://github.com/pioneerAlpha/Adobe-Premiere-Plugin-for-Family-Face-Recognition"> <div class="button"> <b>GitHub Repo</b> </div> </a>
</td></tr>
</table>

### Original Transformer for Bengali Translation
<table>
<tr><td>
<b>Timeline:</b> April 2021 - Present <br/>
<b>Motivation:</b> I have scourged through many online sources and lectures to understand the logic behind <a href="https://arxiv.org/abs/1706.03762">Transfromers</a> by Vaswani et. al. Using the<a href="https://huggingface.co/">HuggingFace Transformers</a> and understanding what is happening underneath is not the same. So, I set two goals for this project (1) Understanding and documenting a brief summary of the transformers architecture clearly, (2) Use the transformer architecture for machine translation. <br/>
<!-- <b>Problem Statement:</b> <br/> -->
<b>Approach:</b> I went through different sources and compiled the ones which are comprehensive and easily tractable. Then I wrote a brief summary of what I understood. I also built all the architectural diagram from scratch because I believe this process forces us to look into things more critically. I also reimplemented the whole thing using PyTorch. <br/>
<b>Results:</b> As for now, the first part of the project is done. And the second part is work in progress. <br/>
<!-- <img src="" width=43%><br/> -->
<b>My Contribution:</b> This is my solo learning project. <br/>
<a href="https://github.com/msi1427/Original-Transformer-for-Bengali-Translation/blob/main/README.md"> <div class="button"> <b>Detailed Report</b> </div> </a>
<a href="https://github.com/msi1427/Original-Transformer-for-Bengali-Translation"> <div class="button"> <b>GitHub Repo</b> </div> </a>
<a href="http://localhost:1313/talks/transformer_sunlp21.pdf"> <div class="button"> <b>Walkthrough</b> </div> </a> 
</td></tr>
</table>

### Anime vs Animation vs CGI
<table>
<tr><td>
<b>Timeline:</b> March 2021 - April 2021 <br/>
<b>Motivation:</b> Back in 2020, I used to be a weeb (someone who always watches and keeps tabs on Japanese animes). There is a common debate among weebs and anime haters. Anime haters see animes as mere animation nothing special. Though by March 2021 I stopped watching animes and all other types of fictional shows, I wanted to put an end to this debate using logic and machine learning. <br/>
<b>Problem Statement:</b> Given a frame from fictional shows, can the machine identify the difference between anime, animation and CGI scenes. <br/>
<b>Approach:</b> I gathered data from google images using keywords and scraping techniques. The images went through preprocessing, augmentation and cleaning process. The <a href="https://docs.fast.ai/">fastai library</a> made many of these tasks very easy to conduct. For training, I fine-tuned a Resnet-50 model pretrained on ImageNet and at the end of the experiments achieved 80% accuracy. I also made a simple web-app for interactive interface.<br/>
<b>Results:</b> <br/>
<b>After this experiment, the debate should exist no more. Yes, they are very different in style.</b><br/>
<img src="projects/aacgi/landing_page.PNG" width=44%><img src="projects/aacgi/result_page.PNG" width=43%><br/>
<b>My Contribution:</b> This was my solo project. <br/>
<a href="https://github.com/msi1427/Anime-vs-Animation-vs-CGI/blob/main/README.md"> <div class="button"> <b>Detailed Report</b> </div> </a>
<a href="https://github.com/msi1427/Anime-vs-Animation-vs-CGI"> <div class="button"> <b>GitHub Repo</b> </div> </a>
<a href="https://youtu.be/aK4_xdcn2Yg"> <div class="button"> <b>Walkthrough</b> </div> </a> 
</td></tr>
</table> 

### Real-Time Face Recognition System for Remote Employee Tracking
<table>
<tr><td>
<b>Timeline:</b> January 2021 - February 2021 <br/>
<b>Motivation:</b> The starting of this project was from a client project on Face Recognition during my time in Pioneer Alpha Ltd. The client project got extended to a research project later due to the scope and range this project covers. <br/>
<b>Problem Statement:</b> Is it possible to build a real-time face recognition system to track the presence of remote employees? <br/>
<b>Approach:</b> The face recognition module is trained on <a href="http://vis-www.cs.umass.edu/lfw/">Labeled Faces in the Wild (LFW)</a> dataset because most of the cameras of remote employees are of low quality and LFW covers a diversified range of faces in the wild. Whenever new employees joins a company, they are assigned an unique random ID containing 2 letters in the beginning and 4 digits in the end. When employees start their session, the camera captures the video in random time frames to check if the employee is actually there. The record is stored in archive history which even the admin cannot change. This is done to maintain fairness. <br/>
<b>Results:</b> <br/>
<img src="projects/face-rec/facerec.PNG" width=60%><br/>
<b>My Contribution:</b> I worked on the whole implementation process while my other teammates helped me with organization process. <br/><br/>
<a href="https://arxiv.org/pdf/2107.07576.pdf"> <div class="button"> <b>Detailed Report</b> </div> </a>
<!-- <a href=""> <div class="button"> <b>GitHub Repo</b> </div> </a> -->
<!-- <a href=""> <div class="button"> <b>Walkthrough</b> </div> </a>  -->
</td></tr>
</table>

### Radiology Report Generation using Full Transformer Architecture
<table>
<tr><td>
<b>Timeline:</b> November 2021 - March 2021 <br/>
<b>Motivation:</b> From the beginning of 2020, we are in a pandemic situation. The condition is much worse in 3rd world countries like Bangladesh. I and my friend, <a href="https://www.researchgate.net/profile/Abir-Azad">Abir Azad</a>, were trying to contribute somehow to the case. We found out that most of the diagnosis reports come out late because of human latency. There are much more patients than doctors, nurses, and health workers. We were looking to contribute to automatic diagnosis report generation research and found <a href="https://physionet.org/content/mimic-cxr/2.0.0/">MIMIC-CXR</a> dataset by Johnson et. al. dealing with radiology report generation. We presented this issue to our Pattern Recognition project supervisor, <a href = "https://cse.iutoic-dhaka.edu/profile/sabbir/educations">Sabbir Ahmed</a>. Under his supervision, we started working on this problem. <br/>
<b>Problem Statement:</b> Given an X-Ray image can the machine learn to understand and generate a medical report from it? <br/>
<b>Approach:</b> To get access to the database, we needed to pass <a href="images/certificates/citi_certificate.pdf"><b>CITI certification</b></a> test so that someone using the dataset understand the implications and ethics of using it. After that, we were given access by the database moderators. The dataset was challenging and required a huge understanding of details. We analyzed and process the dataset but could not use the full version because of hardware deficiencies. For generation task, we used <a href="https://arxiv.org/pdf/2010.11929.pdf">Vision Transformer</a> by Dosovitskiy et. al. as an encoder to understand the X-Ray images and the decoder portion of original transformer architecture as s decoder. Our intuition behind using Vision Transformer(ViT) was that ViT divides images into patches that might recognize better localized spatial structure which is necessary for X-Ray images. Our whole system was end-to-end. And we achieved the closer level of performance with low amount of data. <br/>
<b>Results:</b> <br/>
<img src="projects/radiology-report-gen/arch.PNG" width=23%>
<img src="projects/radiology-report-gen/results.PNG" width=70%><br/>
<b>My Contribution:</b> I am worked on designing the model architecture and training them. <br/><br/>
<a href="projects/radiology-report-gen/Project_Baseline_Report.pdf"> <div class="button"> <b>Detailed Report</b> </div> </a>
<a href="projects/radiology-report-gen/baseline_report_presentation.pdf"> <div class="button"> <b>Walkthrough</b> </div> </a> 
</td></tr>
</table>

### Multimodal Multi-label Genre Classifier
<table>
<tr><td>
<b>Timeline:</b> August 2020 - September 2020 <br/>
<b>Motivation:</b> I used to watch a lot of movies and series back then and I was a regular at IMDb. I used to read layman and critic reviews, sometimes write constructive reviews myself, read plot summaries, and sometimes write the plot summaries if the summaries were not present there. One day, I noticed that we can infer the genres just by reading the plot summaries most of the time. From this intuition, I and some of my friends started exploring this. After exploring, we found out that sometimes the title poster can be also useful for this. For example, we cannot infer if a movie is of 'Animation' genre just by reading the plot. To investigate this further, we discussed the finding with our project supervisor of the Machine Learning course, <a href="https://cse.iutoic-dhaka.edu/profile/hasan/educations">Professor Hasan Mahmud</a>. We finalized this topic as our term course project. <br/>
<b>Problem Statement:</b> Given a title poster and plot summary of a movie or series, can machine identify the genres with high accuracy? <br/>
<b>Approach:</b> First of all, we collected a list of movies and series and their corresponding IMDb URLs from a verified IMDb list. Using the URLs, we scraped the title posters and plot summaries. We worked on 3 types of models in total. For the image modality we used Resnet-50 pretrained on ImageNet and For the text modality we used Bi-LSTM (<a href="https://arxiv.org/pdf/1801.06146.pdf">UMLFit</a>) pretrained on Wikipidea. To find out if using both modalities really make any difference, we fine-tuned Resnet-50 only on the posters, Bi-LSTM on the plot summary and custom Model (Resnet-50 + BiLSTM) was on both modalities. We used accuracy and F1-score (because of imbalanced class problem) as metric.<br/>
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
<b>Motivation:</b> After the completion of our Gesture Recognition project, we (me and my teammate <a href="https://www.researchgate.net/profile/Abir-Azad">Abir Azad</a>) were acquainted with sensor data. And by this time, we also completed the online course on <a href="https://www.coursera.org/learn/machine-learning">Machine Learning</a> and <a href="https://www.coursera.org/specializations/deep-learning">Deep Learning </a> by <a href="https://www.andrewng.org/">Andrew Ng</a>. We had the basic knowledge of machine learning but we did not have enough practical knowledge. Since we were acquainted with ML and accelerometer data, <a href="https://cse.iutoic-dhaka.edu/profile/lota/educations">Professor Lota</a> recruited us in her team of participants in the <a href = "https://abc-research.github.io/nurse2020/"><b>Second Nurse Care Activity Recognition Challenge 2020</b></a>. Our team name was <b>Moonshot_BD</b><br/>
<b>Problem Statement:</b> Given the sensor data from accelerometer with time used by nurses in elder care homes and the manual timetable of different activities by the nurses, is it possible to automate the time-tracking process with high efficiency. <br/>
<b>Approach:</b> The challenge provided us with two raw datasets. One dataset was containing the accelerometer data (x,y,z-axis) with day and time used by the nurses. Another one contained the start and end of an activity. The dataset was imbalanced and small. First of all, we merged using the start and end times of the second dataset. The resulted dataset contained the accelerometer data (x,y,z-axis) and the activity labels. Then we extracted different features from the data. We trained our models using the features. Since the data was small, we only tried out traditional machine learning models like KNNs, Naive Bayes, Random Forest, SVM, and basic MLP. Our intuition behind not using more parameterized models was that the model might overfit. And since we just had one chance to submit the results, we did not take the chance. When the result got published our suspicion was correct. Our basic MLP won the challenge leaving behind several overly parameterized models. Later we published and presented our work in <b><a href="https://ubicomp.org/ubicomp2020">UbiComp/ISWC HASCA 2020</a></b>. <br/>
<b>Results:</b> <a href="https://abc-research.github.io/nurse2020/results/"><b>Result Announcement Link</b></a> <br/>
<img src="projects/nurse-care/announcement.PNG" width=50%><br/>
<b>My Contribution:</b> I worked on all parts of the whole project. But my main focus was on training and testing the machine learning models.<br/><br/>
<a href="https://www.researchgate.net/publication/344271908_Nurse_Care_Activity_Recognition_Based_on_Machine_Learning_Techniques_Using_Accelerometer_Data"> 
<div class="button"> <b>Detailed Report</b> </div> </a>
<a href="https://github.com/msi1427/Second-Nurse-Care-Activity-Recognition-Challenge-2020"> 
<div class="button"> <b>GitHub Repo</b> </div> </a>
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
<br/>
<br/>
<br/>
<br/>
<div class ="box">
    &nbsp;<a href="">            <b>Home</b>  </a> &nbsp;<b>//</b>
    </b>&nbsp;<a href="#bio">             <b>Bio</b>  </a> &nbsp; <b>//</b>
    &nbsp;<a href="#news">                <b>News</b> </a> &nbsp; <b>//</b>
    &nbsp;<a href="#experience">          <b>Experience</b> </a> &nbsp; <b>//</b>
    &nbsp;<a href="#achievements">        <b>Achievements</b> </a> &nbsp; <b>//</b>
    &nbsp;<a href="#publications">        <b>Publications</b> </a> &nbsp; <b>//</b>
    &nbsp;<a href="#projects">            <b>Projects</b> </a> &nbsp;<b>//</b>
    &nbsp;<a href="#blogs">               <b>Blogs</b> </a> &nbsp; <b>//</b>
    &nbsp;<a href="#talks">               <b>Talks</b>    </a> &nbsp; <b>//</b>
    &nbsp;<a href="#hobbies">             <b>Hobbies</b>    </a> &nbsp; <b>//</b>
    &nbsp;<a href="#contacts">            <b>Contacts</b> </a> &nbsp;
</div>