import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'
import { appConfig } from './app/app.config.server';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Correct import

bootstrapApplication(AppComponent, {
  providers: [...appConfig, provideAnimationsAsync()],
}).catch((err) => console.error(err));
