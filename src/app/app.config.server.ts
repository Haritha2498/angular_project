import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Exporting appConfig
export const appConfig = [
  provideRouter(appRoutes), // For routing
  importProvidersFrom(HttpClientModule), // For HTTP Client functionality
  importProvidersFrom(FormsModule, ReactiveFormsModule), // For Forms functionality
];
