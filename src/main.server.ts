import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config.server';  // Corrected import

bootstrapApplication(AppComponent, {
  providers: [...appConfig],  // Using the correct appConfig export
}).catch((err) => console.error(err));
