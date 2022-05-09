Webcam.set(
    {
        width:268,
        height:188,
        image_format:'png',
        png_quality:90
    }
);

camera=document.getElementById("webcamlive");
Webcam.attach('#webcamlive');

function takesnapshot()
{
    Webcam.snap(function (data_uri)
    {
        document.getElementById("capturedimg").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
    }

    );
}


console.log('ml5version',ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lFAmzUIOX/",modelLoaded);

function modelLoaded()
{
    console.log('modelLoaded');
}