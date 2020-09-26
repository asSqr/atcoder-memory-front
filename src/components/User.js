class User {
  isLoggedIn = () => this.get('isLoggedIn') === 'true';

  set = (key, value) => localStorage.setItem( key, value );

  get = key => this.getLocalStorage(key);

  getLocalStorage = key => {
    const ret = localStorage.getItem(key);

    if( ret ) {
      return ret;
    } else {
      return null;
    }
  };

  login = async (userId, password) => {
    this.set( 'isLoggedIn', true );
    this.set( 'userId', userId );
    this.set( 'password', password );

    return true;
  }

  logout = async () => {
    if( this.isLoggedIn() ) {
      this.set( 'isLoggedIn', false );
      this.set( 'userId', null );
      this.set( 'password', null );
    }
  }
}

export default new User();