var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AudioProvider } from './ionic-audio-providers';
import { WebAudioTrack } from './ionic-audio-web-track';
import { CordovaAudioTrack } from './ionic-audio-cordova-track';
import { Component, EventEmitter, Output, Input } from '@angular/core';
/**
 * # ```<audio-track>```
 *
 * Creates a top level audio-track component
 *
 * ## Usage
 *
 * ````
 *   <audio-track #audio [track]="myTrack" (onFinish)="onTrackFinished($event)">
 *   ...
 *   </audio-track>
 * ````
 * @element audio-track
 * @export
 * @class AudioTrackComponent
 */
var AudioTrackComponent = /** @class */ (function () {
    function AudioTrackComponent(_audioProvider) {
        this._audioProvider = _audioProvider;
        /**
         * Output property expects an event handler to be notified whenever playback finishes
         *
         * @property onFinish
         * @type {EventEmitter}
         */
        this.onFinish = new EventEmitter();
    }
    AudioTrackComponent.prototype.ngOnInit = function () {
        if (!this.track)
            return;
        if (!(this.track instanceof WebAudioTrack) && !(this.track instanceof CordovaAudioTrack)) {
            this._audioTrack = this._audioProvider.create(this.track);
        }
        else {
            if (this._audioTrack) {
                Object.assign(this._audioTrack, this.track);
                this._audioProvider.add(this._audioTrack);
            }
        }
        if (this._audioTrack) {
            // update input track parameter with track is so we pass it to WebAudioProvider if needed
            this.track.id = this._audioTrack.id;
        }
    };
    AudioTrackComponent.prototype.play = function () {
        if (!this._audioTrack)
            return;
        this._audioTrack.play();
        this._audioProvider.current = this._audioTrack.id;
    };
    AudioTrackComponent.prototype.pause = function () {
        if (!this._audioTrack)
            return;
        this._audioTrack.pause();
        this._audioProvider.current = undefined;
    };
    AudioTrackComponent.prototype.toggle = function () {
        if (this._audioTrack.isPlaying) {
            this.pause();
        }
        else {
            this.play();
        }
    };
    AudioTrackComponent.prototype.seekTo = function (time) {
        if (!this._audioTrack)
            return;
        this._audioTrack.seekTo(time);
    };
    Object.defineProperty(AudioTrackComponent.prototype, "id", {
        get: function () {
            return this._audioTrack ? this._audioTrack.id : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "art", {
        get: function () {
            return this.track ? this.track.art : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "artist", {
        get: function () {
            return this.track ? this.track.artist : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "title", {
        get: function () {
            return this.track ? this.track.title : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "progress", {
        get: function () {
            return this._audioTrack ? this._audioTrack.progress : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "isPlaying", {
        get: function () {
            return this._audioTrack && this._audioTrack.isPlaying;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "isFinished", {
        get: function () {
            return this._audioTrack && this._audioTrack.isFinished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "duration", {
        get: function () {
            return this._audioTrack ? this._audioTrack.duration : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "completed", {
        get: function () {
            return this._audioTrack ? this._audioTrack.completed : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "canPlay", {
        get: function () {
            return this._audioTrack && this._audioTrack.canPlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "error", {
        get: function () {
            return this._audioTrack ? this._audioTrack.error : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "isLoading", {
        get: function () {
            return this._audioTrack && this._audioTrack.isLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "hasLoaded", {
        get: function () {
            return this._audioTrack && this._audioTrack.hasLoaded;
        },
        enumerable: true,
        configurable: true
    });
    AudioTrackComponent.prototype.ngDoCheck = function () {
        // track has stopped, trigger finish event
        if (this._audioTrack && this._audioTrack.isFinished) {
            this.onFinish.emit(this.track);
            this._audioTrack.isFinished = false;
        }
    };
    AudioTrackComponent.prototype.ngOnChanges = function (changes) {
        if (changes.track.firstChange)
            return;
        if (this._audioTrack && this._audioTrack.isPlaying)
            this._audioTrack.stop();
        this._audioTrack = this._audioProvider.create(changes.track.currentValue);
        console.log("ngOnChanges -> new audio track detected", this._audioTrack);
        this.autoplay && this._audioTrack.play();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AudioTrackComponent.prototype, "track", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AudioTrackComponent.prototype, "autoplay", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AudioTrackComponent.prototype, "onFinish", void 0);
    AudioTrackComponent = __decorate([
        Component({
            selector: 'audio-track',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [AudioProvider])
    ], AudioTrackComponent);
    return AudioTrackComponent;
}());
export { AudioTrackComponent };
//# sourceMappingURL=ionic-audio-track-component.js.map