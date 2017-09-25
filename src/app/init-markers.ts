
export class Init{

  load() {
    if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined ) {
      console.log('no markers found ... creating ...');
      let markers = [
        {
          name: 'Company One',
          lat: 42.825588,
          lng: -71.018029,
          draggable: true
        },
        {
          name: 'Company Two',
          lat: 42.861864,
          lng: -70.889071,
          draggable: true
        },
        {
          name: 'Company Three',
          lat: 42.828279,
          lng: -70.930498,
          draggable: false
        }
      ];
      localStorage.setItem('markers', JSON.stringify(markers));
    } else {
      console.log('Loading markers ...');
    }

  }

}
