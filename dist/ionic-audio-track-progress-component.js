var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * # ```<audio-track-progress>```
 *
 * Renders a timer component displaying track progress and duration
 *
 * ## Usage
 * ````
 * <audio-track-progress [audioTrack]="track"></audio-track-progress>
 * ````
 *
 * @element audio-track-progress
 * @parents audio-track
 * @export
 * @class AudioTrackProgressComponent
 */
var AudioTrackProgressComponent = /** @class */ (function () {
    function AudioTrackProgressComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AudioTrackProgressComponent.prototype, "audioTrack", void 0);
    AudioTrackProgressComponent = __decorate([
        Component({
            selector: 'audio-track-progress',
            template: '<em *ngIf="audioTrack.duration > 0">{{audioTrack.progress | audioTime}} / </em><em>{{audioTrack.duration | audioTime}}</em>'
        })
    ], AudioTrackProgressComponent);
    return AudioTrackProgressComponent;
}());
export { AudioTrackProgressComponent };
/**
 * # ```<audio-track-progress-bar>```
 *
 * Renders a progress bar with optional timer, duration and progress indicator
 *
 * ## Usage
 * ````
 *  <audio-track-progress-bar duration progress [audioTrack]="audio"></audio-track-progress-bar>
 * ````
 *
 * @element audio-track-progress-bar
 * @parents audio-track
 * @export
 * @class AudioTrackProgressBarComponent
 */
var AudioTrackProgressBarComponent = /** @class */ (function () {
    function AudioTrackProgressBarComponent() {
        this.onFinish = new EventEmitter();
    }
    Object.defineProperty(AudioTrackProgressBarComponent.prototype, "progress", {
        get: function () {
            return this._showProgress;
        },
        /**
         * Input property indicating whether to display track progress
         *
         * @property @Input() progress
         * @type {boolean}
         */
        set: function (value) {
            this._showProgress = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackProgressBarComponent.prototype, "duration", {
        get: function () {
            return this._showDuration;
        },
        /**
         * Input property indicating whether to display track duration
         *
         * @property @Input() duration
         * @type {boolean}
         */
        set: function (value) {
            this._showDuration = true;
        },
        enumerable: true,
        configurable: true
    });
    AudioTrackProgressBarComponent.prototype.seekTo = function (value) {
        if (!Number.isNaN(value))
            this.audioTrack.seekTo(value);
    };
    AudioTrackProgressBarComponent.prototype.ngOnChanges = function (changes) {
        if (changes.audioTrack.firstChange)
            return;
        // stop old track just in case
        var oldTrack = changes.audioTrack.previousValue;
        if ((oldTrack) && (typeof oldTrack.stop === "function")) {
            oldTrack.stop();
        }
    };
    AudioTrackProgressBarComponent.prototype.ngDoCheck = function () {
        if (this.audioTrack && this.audioTrack.isFinished) {
            this.onFinish.emit(this.audioTrack);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AudioTrackProgressBarComponent.prototype, "audioTrack", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AudioTrackProgressBarComponent.prototype, "onFinish", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AudioTrackProgressBarComponent.prototype, "progress", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AudioTrackProgressBarComponent.prototype, "duration", null);
    AudioTrackProgressBarComponent = __decorate([
        Component({
            selector: 'audio-track-progress-bar',
            template: "\n    <time *ngIf=\"_showProgress\"><span *ngIf=\"audioTrack\" [style.opacity]=\"audioTrack.duration > 0 ? 1 : 0\">{{audioTrack.progress | audioTime}}</span></time>\n    <input type=\"range\" #seeker min=\"0\" [max]=\"audioTrack ? audioTrack.duration : 0\" step=\"any\" [value]=\"audioTrack ? audioTrack.progress : 0\" (change)=\"seekTo(seeker.value)\">\n    <time *ngIf=\"_showDuration\"><span *ngIf=\"audioTrack\" [style.opacity]=\"audioTrack.duration > 0 ? 1 : 0\">{{audioTrack.duration | audioTime}}</span></time>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], AudioTrackProgressBarComponent);
    return AudioTrackProgressBarComponent;
}());
export { AudioTrackProgressBarComponent };
//# sourceMappingURL=ionic-audio-track-progress-component.js.map