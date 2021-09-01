var images = 
     [
       "https://i.postimg.cc/MKdhy06Z/family.jpg",
       "https://www.seekpng.com/png/full/373-3737886_man-clipart-dad-animated-picture-of-father.png",
   "https://png.pngtree.com/png-clipart/20190904/original/pngtree-cartoon-mother-png-download-png-image_4498680.jpg",
    "https://www.seekpng.com/png/full/373-3730186_brother-big-brother-and-little-brother-cartoon.png"          ];
            var names = ["Family Book","Kotesh Damarla my father", "Jyothsna vaddi my mother"," Me and my brother Chandresh and Dvijesh Damarla"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }
