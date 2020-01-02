var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { WebAudioTrack } from './ionic-audio-web-track';
import { CordovaAudioTrack } from './ionic-audio-cordova-track';
/**
 * Creates an audio provider based on the environment.
 * If running from within a browser, then defaults to HTML5 Audio. If running on a device, it will check for Cordova and Media plugins and use
 * a native audio player, otherwise falls back to HTML5 audio.
 *
 * @method factory
 * @static
 * @return {IAudioProvider} An IAudioProvider instance
 */
export function defaultAudioProviderFactory() {
    return window.hasOwnProperty('cordova') && window.hasOwnProperty('Media') ? new CordovaMediaProvider() : new WebAudioProvider();
}
/**
 * Base class for audio providers
 *
 * @export
 * @abstract
 * @class AudioProvider
 * @implements {IAudioProvider}
 */
var AudioProvider = /** @class */ (function () {
    function AudioProvider() {
    }
    AudioProvider_1 = AudioProvider;
    /**
     * Creates an IAudioTrack instance from a JSON object.
     * Not implemented in base class.
     *
     * @method create
     * @param {ITrackConstraint} track A JSON object containing at least a src property
     * @return null
     */
    AudioProvider.prototype.create = function (track) {
        console.error('Not implemented in base class');
        return null;
    };
    /**
     * Replaces track with a new one
     * @param oldAudioTrack
     * @param newTrack
     */
    AudioProvider.prototype.replace = function (oldAudioTrack, newTrack) {
        console.error('Not implemented in base class');
        return null;
    };
    /**
     * Adds an existing IAudioTrack instance to the array of managed tracks.
     *
     * @method add
     * @param {IAudioTrack} audioTrack An instance of IAudioTrack
     */
    AudioProvider.prototype.add = function (audioTrack) {
        AudioProvider_1.tracks.push(audioTrack);
    };
    ;
    /**
     * Plays a given track.
     *
     * @method play
     * @param {number} index The track id
     */
    AudioProvider.prototype.play = function (index) {
        if (index === undefined || index > AudioProvider_1.tracks.length - 1)
            return;
        this._current = index;
        AudioProvider_1.tracks[index].play();
    };
    ;
    /**
     * Pauses a given track.
     *
     * @method pause
     * @param {number} [index] The track id, or if undefined it will pause whichever track currently playing
     */
    AudioProvider.prototype.pause = function (index) {
        if (this._current === undefined || index > AudioProvider_1.tracks.length - 1)
            return;
        index = index || this._current;
        AudioProvider_1.tracks[index].pause();
    };
    ;
    /**
     * Stops a given track.
     *
     * @method stop
     * @param {number} [index] The track id, or if undefined it will stop whichever track currently playing
     */
    AudioProvider.prototype.stop = function (index) {
        if (this._current === undefined || index > AudioProvider_1.tracks.length - 1)
            return;
        index = index || this._current;
        AudioProvider_1.tracks[index].stop();
        this._current = undefined;
    };
    ;
    Object.defineProperty(AudioProvider.prototype, "tracks", {
        /**
         * Gets an array of tracks managed by this provider
         *
         * @property tracks
         * @readonly
         * @type {IAudioTrack[]}
         */
        get: function () {
            return AudioProvider_1.tracks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioProvider.prototype, "current", {
        /**
         * Gets current track id
         *
         * @property current
         * @type {number}
         */
        get: function () {
            return this._current;
        },
        /**
         * Sets current track id
         *
         * @property current
         */
        set: function (v) {
            this._current = v;
        },
        enumerable: true,
        configurable: true
    });
    var AudioProvider_1;
    AudioProvider.tracks = [];
    AudioProvider = AudioProvider_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], AudioProvider);
    return AudioProvider;
}());
export { AudioProvider };
/**
 * Creates an HTML5 audio provider
 *
 * @export
 * @class WebAudioProvider
 * @constructor
 * @extends {AudioProvider}
 */
var WebAudioProvider = /** @class */ (function (_super) {
    __extends(WebAudioProvider, _super);
    function WebAudioProvider() {
        var _this = _super.call(this) || this;
        console.log('Using Web Audio provider');
        return _this;
    }
    WebAudioProvider_1 = WebAudioProvider;
    WebAudioProvider.prototype.create = function (track) {
        var audioTrack = new WebAudioTrack(track.src, track.preload);
        Object.assign(audioTrack, track);
        var trackId = WebAudioProvider_1.tracks.push(audioTrack);
        audioTrack.id = trackId - 1;
        return audioTrack;
    };
    WebAudioProvider.prototype.replace = function (oldAudioTrack, newTrack) {
        //WebAudioProvider.tracks.pop();
        var index = WebAudioProvider_1.tracks.findIndex(function (track) { return Object.is(oldAudioTrack, track); });
        var newAudioTrack = newTrack instanceof WebAudioTrack ? newTrack : new WebAudioTrack(newTrack.src, newTrack.preload);
        Object.assign(newAudioTrack, newTrack);
        if (index > -1) {
            WebAudioProvider_1.tracks.splice(index, 1, newAudioTrack);
        }
        else {
            var trackId = WebAudioProvider_1.tracks.push(newAudioTrack);
            newAudioTrack.id = trackId - 1;
        }
        console.log("Replaced audio track", oldAudioTrack, newAudioTrack);
        console.log("Current track list", WebAudioProvider_1.tracks);
        return newAudioTrack;
    };
    var WebAudioProvider_1;
    WebAudioProvider = WebAudioProvider_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], WebAudioProvider);
    return WebAudioProvider;
}(AudioProvider));
export { WebAudioProvider };
/**
 * Creates a Cordova audio provider
 *
 * @export
 * @class CordovaMediaProvider
 * @constructor
 * @extends {AudioProvider}
 */
var CordovaMediaProvider = /** @class */ (function (_super) {
    __extends(CordovaMediaProvider, _super);
    function CordovaMediaProvider() {
        var _this = _super.call(this) || this;
        console.log('Using Cordova Media provider');
        return _this;
    }
    CordovaMediaProvider_1 = CordovaMediaProvider;
    CordovaMediaProvider.prototype.create = function (track) {
        var audioTrack = new CordovaAudioTrack(track.src);
        Object.assign(audioTrack, track);
        var trackId = CordovaMediaProvider_1.tracks.push(audioTrack);
        audioTrack.id = trackId - 1;
        return audioTrack;
    };
    CordovaMediaProvider.prototype.replace = function (oldTrack, newTrack) {
        return null;
    };
    var CordovaMediaProvider_1;
    CordovaMediaProvider = CordovaMediaProvider_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], CordovaMediaProvider);
    return CordovaMediaProvider;
}(AudioProvider));
export { CordovaMediaProvider };
//# sourceMappingURL=ionic-audio-providers.js.map