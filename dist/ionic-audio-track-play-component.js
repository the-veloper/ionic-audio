var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input } from '@angular/core';
/**
 * # ```<audio-track-play>```
 *
 * Renders a play/pause button that optionally displays a loading spinner
 *
 * ## Usage
 * ````
 * <audio-track #audio [track]="myTrack" (onFinish)="onTrackFinished($event)">
 *  <ion-item>
 *    <audio-track-play item-left [audioTrack]="audio"><ion-spinner></ion-spinner></audio-track-play>
 *    <h3>{{audio.title}}</h3>
 *  </ion-item>
 * </audio-track>
 * ````
 * If placed within a ```<ion-thumnbail>``` component it will render as a semi-transparent button layover (see live demo).
 * Passing a ```<ion-spinner>``` as a child element will display a loading spinner while loading.
 *
 * ````
 * <audio-track #audio [track]="track" (onFinish)="onTrackFinished($event)">
 *   <ion-item>
 *       <ion-thumbnail item-left>
 *         <img src="{{audio.art}}">
 *         <audio-track-play dark [audioTrack]="audio"><ion-spinner></ion-spinner></audio-track-play>
 *       </ion-thumbnail>
 *       <p><strong>{{audio.title}}</strong></p>
 *   </ion-item>
 * </audio-track>
 * ````
 *
 * @element audio-track-play
 * @parents audio-track
 * @export
 * @class AudioTrackPlayComponent
 */
var AudioTrackPlayComponent = /** @class */ (function () {
    function AudioTrackPlayComponent(el) {
        this.el = el;
    }
    Object.defineProperty(AudioTrackPlayComponent.prototype, "light", {
        /**
         * Renders the component using the light theme
         *
         * @property @Input() light
         * @type {boolean}
         */
        set: function (val) {
            this.el.nativeElement.firstElementChild.classList.add('light');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackPlayComponent.prototype, "dark", {
        /**
         * Renders the component using the dark theme
         *
         * @property @Input() dark
         * @type {boolean}
         */
        set: function (val) {
            this.el.nativeElement.firstElementChild.classList.add('dark');
        },
        enumerable: true,
        configurable: true
    });
    AudioTrackPlayComponent.prototype.toggle = function (event) {
        if (this.audioTrack.isPlaying) {
            this.audioTrack.pause();
        }
        else {
            this.audioTrack.play();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AudioTrackPlayComponent.prototype, "audioTrack", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AudioTrackPlayComponent.prototype, "light", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AudioTrackPlayComponent.prototype, "dark", null);
    AudioTrackPlayComponent = __decorate([
        Component({
            selector: 'audio-track-play',
            template: "\n    <ion-button icon-only clear (click)=\"toggle($event)\" [disabled]=\"audioTrack.error || audioTrack.isLoading\">\n      <ion-icon name=\"pause\" *ngIf=\"audioTrack.isPlaying && !audioTrack.isLoading\"></ion-icon>\n      <ion-icon name=\"play\" *ngIf=\"!audioTrack.isPlaying && !audioTrack.isLoading\"></ion-icon>\n      <ng-content *ngIf=\"audioTrack.isLoading && !audioTrack.error\"></ng-content>\n    </ion-button>\n    "
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], AudioTrackPlayComponent);
    return AudioTrackPlayComponent;
}());
export { AudioTrackPlayComponent };
//# sourceMappingURL=ionic-audio-track-play-component.js.map