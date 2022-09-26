
import Header from './components/header';
import Hero from './components/hero';
import star from './assests/starwars.jpg';
import typekit from './assests/typekit.jpg'; 
import pixelapse from './assests/pixelapse.jpg';
import steam from './assests/steam.jpg';
import wunderlist from './assests/wunderlist.jpg';
import Main from './components/main';
import Footer from './components/footer';
import './App.css';

let designs=[
  {
    name:"STAR WARS", 
    image:star,
    description:"The Star Wars website has great contrast between the dark grey and brighter colors such as white and also yellow. It uses fluid layout in a way as to allow the user to still have easy access to all of the content. The site doesn’t start to really change until it takes up just under a third of my screen width, except for resizing that starts to happen once my browser shrinks width-wise to just over half of the way. When I squish the browser window to approximately one third the screen width, the two columns of panels merge into a single column of panels. When I scrunch the page all of the way, the search bar shrinks to only the “magnifying glass” search icon and log in, sign up, and the row of social media are moved to the more options fly-out that looks like “three lines”. The fly-out, when clicked on, becomes “two clashing lightsabers” which is really cool!",
  },
  {
    name:"TYPEKIT", 
    image:typekit,
    description:"Upon entering typekit.com, I am instantly captivated by the beautifully “typographed” heading and the vibrant green and blue that is laid on top of black. The contrast of the text against the dark background image is absolutely stunning! The fluid layout is very successfully implemented. The featured fonts, essentially logos cropped into tiles, start out in an arrangement in the shape of a diamond. Like most of the other sections which are also tiled, all of the featured fonts become viewable through a horizontal scrollbar. The many linked subheadings found in the using Typekit section near the bottom of the page are arranged in a cloud formation and they readjust to form a vertically scrolling setup commonplace to smartphone apps. At the top of the page, the three main menu items titled menu, sign in, and Adobe retract to show just their icons.",
  },
  {
    name:"PIXELAPSE", 
    image:pixelapse,
    description:"When I enter pixelapse.com, my curiosity is sparked! Why do I say this? The slogan in white and italics captures my attention, the diagonal angles of the laptop and phablet excite me, and the perspective those objects are shown in makes me feel like I am standing over my workspace getting ready to get into the groove. The vivid blue button popping out of the medium blue background interests me. Create a free account?! I don’t mind if I do! As I smoosh the website, the Macbook and Blackberry shrink like I am backing away from my desk. There isn’t much to the fluidity of this site, other than the zooming out and text reflowing. Simplistic design at its best.",
  },
  {
    name:"STEAM", 
    image:steam,
    description: "The Steam website is well organized and has a very subdued color scheme. The analogous color scheme definitely works, although it’s a safe design choice. The color scheme gives the site a technical, nerdy feel which I am sure is exactly what they were going for, being about computer games, and such. As in Typekit’s site, certain sections, in this case new on Steam, recently updated, and under $10, make use of a horizontal scrollbar to conserve vertical space. The navigation bar and search bar become a vertical list of dropdown menus. The spotlight, and the recommended for you, as well as the specials section skip to below the panels at their left when the browser window is resized." 
  },
  {
    name:"WUNDERLIST", 
    image:wunderlist,
    description: "It’s not hard to see that wunderlist.com is laid out in a very simple way as to bring the main focus solely to how they can help you organize and keep track of your life’s to-dos. With lots of white space and the use of just a couple of colors (red as the primary color and blue as the accenting color), you will mostly just take note of the features. As far as the fluid layout, the site readjusts in pretty much just two ways: the section text moves below each section image and the content shrinks in size. These two things happen at exactly the same time: when the window reduces to a little bit less than one half of my screen’s width. A third thing also occurs at this time: The section titled Wunderlist at a glance, which begins as three columns by four rows, becomes two columns by six rows. Thank goodness it doesn’t become one column by twelve rows, because that would be a tedious amount of scrolling!"  
  },

];



function App() {
  return (
    <section>
      <Header/>
      <Hero/>
      {designs.map((item)=>
        <Main name={item.name} image={item.image} description={item.description}/>
      )}
      <Footer/>
    </section>
  );
}


export default App;
