window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if (this.scrollY <= 50) nav.className = 'navbar fixed-top navbar-expand-lg navbar-light';
  else nav.className = 'scroll navbar fixed-top navbar-expand-lg navbar-light';
};
