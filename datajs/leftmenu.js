function show_tab(tone,ttwo,bone,btwo) {
	//alert(tone);
	$(ttwo).hide();	
	$(tone).show();	
	
	//alert();
	$(btwo).removeClass('active');
	//$(tone).removeClass('active');
	$(bone).addClass('active');
}

// <li><a href="faculty-registermynewmobile.html" class="close-panel"><img src="images/icons/red/mobile.png" alt="" title="" /><span>Register My New Mobile</span></a></li>

$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var menu = '<li><a href="index.html" class="close-panel"><img src="images/icons/yellow/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="about.html" class="close-panel"><img src="images/icons/yellow/user.png" alt="" title="" /><span>About Us</span></a></li><li><a href="church-activities.html" class="close-panel"><img src="images/icons/yellow/church.png" alt="" title="" /><span>Church Activities</span></a></li><li><a href="http://churchonmountzion.com/news-events/" target="_blank" class="external" class="close-panel"><img src="images/icons/yellow/blog.png" alt="" title="" /><span>News & Events</span></a></li>		<li><a href="http://churchonmountzion.com/category/songs/" target="_blank" class="external" class="close-panel"><img src="images/icons/yellow/music.png" alt="" title="" /><span>Songs</span></a></li><li><a href="http://churchonmountzion.com/category/lyrics/" target="_blank" class="external" class="close-panel"><img src="images/icons/yellow/podcast.png" alt="" title="" /><span>Lyrics</span></a></li><li><a href="http://churchonmountzion.com/photos/" target="_blank" class="external" class="close-panel"><img src="images/icons/yellow/photos.png" alt="" title="" /><span>Photo Gallery</span></a></li><li><a href="video-message.html" class="close-panel"><img src="images/icons/yellow/movie.png" alt="" title="" /><span>Video Message</span></a></li><li><a href="daily-bible.php" class="close-panel"><img src="images/icons/yellow/books.png" alt="" title="" /><span>Daily Bible</span></a></li><li><a href="contact.html" class="close-panel"><img src="images/icons/yellow/contact.png" alt="" title="" /><span>Contact</span></a></li>';
		
		$("#sidemenu").append(menu);
		
		/*var RIGHTmenu = '<li><a href="#" class="close-panel"><img src="images/icons/red/settings.png" alt="" title="" /><span>Account Settings</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/briefcase.png" alt="" title="" /><span>My Account</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/message.png" alt="" title="" /><span>Notice</span><strong>12</strong></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/love.png" alt="" title="" /><span>Class</span><strong>5</strong></a></li><li><a href="logout.html" class="close-panel"><img src="images/icons/red/lock.png" alt="" title="" /><span>Logout</span></a></li>';
		
		$("#rightmenu").append(RIGHTmenu);*/
		
	});