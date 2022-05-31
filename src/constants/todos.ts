export default [
  'There is obviously no security here, so securing calls to a server somewhere is obvious ;). We defintely want to make sure we are communicating over HTTPS and, again obviously, assuming we are dealing with real insurance data, we would need to be able to identify the user',
  'We haven\'t implemented any permissions or roles, but also we there is no reason to yet...',
  'Since we are dealing with insurance and the general public, make sure our application is up to date with current accessibility standards. I think ive seen some "h" tags floating around. Also the Nav links are not in the tab list.',
  'More testing should be added. I like snapshot testing as opposed to having a test that makes sure that something was rendered. Each component can have at least a single snapshot.',
  'I\'m not currently doing much error handling around the GET and POST requests. This could be beefed up. We should display friendly errors to the user in some manner.',
  'Evaluate the use of the react-query library. Redux is overused and I didn\'nt want to use it in this application since I am not sharing data between components. This library looked fun and is hopefully a little different. It has a very react-graphql vibe.',
  'I\'ve never deployed a "Create React App" to production before. Seems like we might want to make sure we get our bundle down an appropriate size. We\'d have to eject webpack though and might not want to do that.'
]