const initState = {
  projects: [
    {id: '1', title: 'Video 1', content: 'blah blah blah'},
    {id: '2', title: 'Video 2', content: 'blah blah blah'},
    {id: '3', title: 'Video 3', content: 'blah blah blah'},
    {id: '4', title: 'Video 4', content: 'blah blah blah'},

  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
  }
  return state;
};

export default projectReducer;