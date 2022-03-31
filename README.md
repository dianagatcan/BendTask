# 👩🏼‍💻 BendTask

This repository serves as an application for Bend Technologies. The task was to display the following image based on the provided JSON.

![image (22) (1)](https://user-images.githubusercontent.com/67389035/161068556-5272ec98-574f-431e-9d79-c1284eb713e0.png)

## Notes

Given the JSON and the image I figured the following:
- The elements are grouped into zones by their `areaId`;
- Elements which have `joinedWith: null` can be considered as 'head' of a group of elements;
- Elements which have `joinedWith` equal to the `id` of another element can be considered a 'follower' of that 'head';
- The 'head' has an additional styled line which can be either yellow, orange or red, depending on the status of the 'head' + 'follower/s' group:
- - yellow: when all elements of the group have `status: open`;
- - red: when all elements of the group have `status: closed`;
- - orange: when elements of the group have at least one instance of `status: open` & one of `status: closed`;

I haven't figured what is the purpose of `countActive` since I couldn't find what changed in the display based on it's value. Also, I have decided to move the object with `id: 2970` further in the array so it would better fit with the sample image.

## Result
<img width="1375" alt="Screen Shot 2022-03-31 at 4 43 25 PM" src="https://user-images.githubusercontent.com/67389035/161069540-06ff9637-ec29-45b3-aea5-bcc1a55343cd.png">

## Development server

To run this project, locally, you need to have npm installed so you can fetch dependencies using npm i.

If you don't have Angular CLI installed, you can run npm run start, which will open the server locally, on port 4200.

Otherwise, simply, run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
