var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { AudioProvider } from './ionic-audio-providers';
/**
 * Generated class for the AudioPlaylistItemDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
var AudioPlaylistItemDirective = /** @class */ (function () {
    function AudioPlaylistItemDirective(_audioProvider) {
        this._audioProvider = _audioProvider;
        this.currentTrackChange = new EventEmitter();
    }
    AudioPlaylistItemDirective_1 = AudioPlaylistItemDirective;
    AudioPlaylistItemDirective.prototype.ngOnInit = function () {
        this._index = AudioPlaylistItemDirective_1._tracklist.push(this.track) - 1;
    };
    AudioPlaylistItemDirective.prototype.onClick = function () {
        this._play();
    };
    AudioPlaylistItemDirective.prototype.next = function () {
        if (AudioPlaylistItemDirective_1._currentIndex > -1 && AudioPlaylistItemDirective_1._currentIndex < AudioPlaylistItemDirective_1._tracklist.length - 1) {
            this._play(++AudioPlaylistItemDirective_1._currentIndex);
        }
    };
    Object.defineProperty(AudioPlaylistItemDirective.prototype, "currentIndex", {
        get: function () {
            return AudioPlaylistItemDirective_1._currentIndex;
        },
        enumerable: true,
        configurable: true
    });
    AudioPlaylistItemDirective.prototype._play = function (index) {
        index = index || this._index;
        console.log('Playing', index);
        AudioPlaylistItemDirective_1._currentIndex = index;
        this.currentTrack = AudioPlaylistItemDirective_1._tracklist[index];
        this.currentTrackChange.emit(this.currentTrack);
    };
    var AudioPlaylistItemDirective_1;
    AudioPlaylistItemDirective._currentIndex = -1;
    AudioPlaylistItemDirective._tracklist = [];
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AudioPlaylistItemDirective.prototype, "track", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AudioPlaylistItemDirective.prototype, "currentTrack", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AudioPlaylistItemDirective.prototype, "currentTrackChange", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AudioPlaylistItemDirective.prototype, "onClick", null);
    AudioPlaylistItemDirective = AudioPlaylistItemDirective_1 = __decorate([
        Directive({
            selector: '[audio-playlist-item]' // Attribute selector
        }),
        __metadata("design:paramtypes", [AudioProvider])
    ], AudioPlaylistItemDirective);
    return AudioPlaylistItemDirective;
}());
export { AudioPlaylistItemDirective };
//# sourceMappingURL=ionic-audio-playlist-item-directive.js.map