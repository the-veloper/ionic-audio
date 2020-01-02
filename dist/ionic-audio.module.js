var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AudioTrackComponent } from './ionic-audio-track-component';
import { AudioTrackProgressComponent, AudioTrackProgressBarComponent } from './ionic-audio-track-progress-component';
import { AudioTrackPlayComponent } from './ionic-audio-track-play-component';
import { AudioTimePipe } from './ionic-audio-time-pipe';
import { AudioProvider } from './ionic-audio-providers';
import { AudioPlaylistItemDirective } from './ionic-audio-playlist-item-directive';
export function declarations() {
    return [
        AudioTrackComponent,
        AudioTrackProgressComponent,
        AudioTrackProgressBarComponent,
        AudioTrackPlayComponent,
        AudioTimePipe,
        AudioPlaylistItemDirective
    ];
}
var IonicAudioModule = /** @class */ (function () {
    function IonicAudioModule() {
    }
    IonicAudioModule_1 = IonicAudioModule;
    /**
     * Configures Ionic Audio to use either Cordova or HTML5 audio.
     * If no ```audioProvider``` is set it will automatically choose one based on the current environment
     */
    IonicAudioModule.forRoot = function (audioProviderFactory) {
        return {
            ngModule: IonicAudioModule_1,
            providers: [
                { provide: AudioProvider, useFactory: audioProviderFactory }
            ]
        };
    };
    var IonicAudioModule_1;
    IonicAudioModule = IonicAudioModule_1 = __decorate([
        NgModule({
            imports: [CommonModule, IonicModule],
            declarations: declarations(),
            exports: declarations(),
            providers: [],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], IonicAudioModule);
    return IonicAudioModule;
}());
export { IonicAudioModule };
//# sourceMappingURL=ionic-audio.module.js.map