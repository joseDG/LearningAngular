import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  imports: [
    BrowserModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-qu-1pgpb.us.auth0.com',
      clientId: 'fQJBt0UeGMi4eZI6fRjBZ1QpUBVmqgjo'
    }),
  ],

})
export class AuthService {}