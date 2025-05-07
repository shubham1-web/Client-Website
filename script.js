function bookNow(serviceName) {
    const username = "suman._.arts"; 
    const message = encodeURIComponent(`Hi Suman Arts, I’d like to book the ${serviceName} service.`);
    const url = `https://www.instagram.com/${username}/`;
  
    alert(`Opening Instagram to book "${serviceName}"...`);
    window.open(url, '_blank');
  }
  