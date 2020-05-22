const why = `
<h2>Why Did I Build This Demo?</h2>
<p>This demo demonstrates the use of Redux in React. Redux is a state management 
    that can be used in React project. I find React to be an easy framework to use. 
    Its learning curve is not to steep, but it can get very... very... advanced (thanks to the power
    of open source 💪🏽). Nonetheless in every advantage there always be a disadvantage (Johan Cruyf),
    while it's easy to create components in React, the states can go wild. Redux tame these wild
    states by managing them in one single storage.
</p>
<p>The demo might be simple but it suffies to excercise simple states to more 
    complex asynchronous states using Thunk. I really enjoyed creating this demo.
    I learnt a lot and I hope you can also take away something from it.
</p>`

const what = `
<h2>What Are Contained In This App?</h2>
<p>
<strong>Repo.</strong>
Please check out the source on <a target="_blank" href="https://github.com/huferry/bible-search">
<img src="https://github.com/favicon.ico">GitHub repository.<a/>
</p>
<p>
<strong>Single-Page Application.</strong>
A single-page application will loads the whole page at once. Any interaction from the
will create communcation from the browser and the server in the background. This will
enhance the user experience by minimizing the re-loading waiting time and a smoother
transitions within the page. By the later, it's smoother since the page will not 
enterly reloaded and the user will not see the <i>reload button</i> of the browser
reacting.
<p>
<strong>React/Redux.</strong>
The application is build using react framework, one of the most populair front-end
framework in the year 2020. React makes adding custom components simple and almost
effortless. However, when sharing states between components, it can get very nasty.
Redux manages the states of the components within a single global store. This application
makes use the <i>connect</i> function from Redux which allows mapping states from the 
Redux' store as if they were the component's own properties. 
</p>
<p>
<strong>Functional Style React.</strong>
All React components in this application are constructed using functions in stead
of components. I personally favor functions to classes, for its simplicity. Functions
just have an output, without any override method, without constructor and with more managable
behaviours.
</p>
<p>
<strong>Responsive CSS.</strong>
The layout is made responsive to the user's device. Try to open the page both
on the PC and a mobile device and you will see a slight difference between the
two.
</p>
<p><strong>Azure Web Service.</strong>
The bible texts are provided by a web service that is deployed as an
Azure web service. The source of this API can be found on this
<a href="https://github.com/huferry/bible-api"><img src="https://github.com/favicon.ico">GitHub repository</a>.
</p>
<p>Test the API on your browser: <a href="https://bible-verses-service.azurewebsites.net/verses/acts%201:1"><u>
https://bible-verses-service.azurewebsites.net/verses/acts%201:1</u></a>
</p>
`

const who = `
<h2>Who is Ferry?</h2>
<p>My name is Ferry Utomo. You might wonder the origin of my surname. 
While it might sounds like Japanese, it is not. I was born on Java, so 
practically I'm a Javanese rather than a Japanese.
</p>
<p>I was born in the seventies and start programming when I was 14 years.
I write code fluently in the good old Delphi 🤬, C# and JavaScript. 
Since the corona attack I trade my time I used to have to commute, two times 60km,
by learning Dart/Flutter to create Android/iOS apps.
</p>
<p>Let's connect and get to know each other more! This is my <a target="_" href="https://www.linkedin.com/in/heruutomo/">LinkedIn</a> page.</p>`

const SubContentText = {why,what,who}

export default SubContentText