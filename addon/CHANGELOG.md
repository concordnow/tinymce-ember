# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.1.0-0] - 2023-02-17

## [4.1.0-0] - 2023-02-17
### Added
* Upgrade ember-auto-import & webpack as dev dependencies
* Upgrade @ember/test-helpers from 2.4.2 to 2.9.3
* Upgrade fetch-metadata from 1.3.1 to 1.3.6
* Convert rollup config to commonjs
* Use json for linter and formatter config files
* Upgrade Rollup from 2.79.1 to 3.9.1 in /addon
* Add `concurrency` setup to GH Actions workflow
* Upgrade @embroider/addon-dev from 1.8.3 to 2.0.0 in /addon
* Upgrade @rollup/plugin-babel from 5.3.1 to 6.0.0 in /addon

## [4.0.0-1] - 2022-08-08
### Added
- Add Tinymce v6 support

## [4.0.0-0] - 2022-08-03

### Fixed
- Fix npm CI publish step

### Changed
- V2 addon

### Fixed
- Fix Tinymce v6 compatibility

## [3.0.2] - 2022-04-08

### Fixed
- Fix memory leak

## [3.0.1] - 2022-01-28

### Fixed
- Fix doc

## [3.0.0] - 2021-12-08

### Changed
- Bump Ember.js requirement to v3.20 or above
- Bump Ember CLI requirement to v3.20 or above

### Fixed
- Fix runloop issue in tests (#183)

## [2.0.0] - 2021-09-14

### Changed
- Bump Node requirement to v12 minimum
- Requires ember-auto-import >= 2
- Move to modifiers

### Removed
- 'Target' feature option

## [1.2.1] - 2021-06-02

### Fixed
- Remove use of String.prototype.replaceAll

## [1.2.0] - 2021-03-09

### Changed
- Update elliptic from 6.5.3 to 6.5.4
- Update ini from 1.3.5 to 1.3.8

## [1.1.0] - 2021-03-09

### Changed
- Update TinyMCE to 5.6.0

### Fixed
- Run on init function after setup config

[4.1.0-0]: https://github.com/concordnow/tinymce-ember/compare/v4.0.0-1...v4.1.0-0
[4.0.0-1]: https://github.com/concordnow/tinymce-ember/compare/v4.0.0-0...v4.0.0-1
[4.0.0-0]: https://github.com/concordnow/tinymce-ember/compare/v3.0.2...v4.0.0-0
[3.0.2]: https://github.com/concordnow/tinymce-ember/compare/v3.0.1...v3.0.2
[3.0.1]: https://github.com/concordnow/tinymce-ember/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/concordnow/tinymce-ember/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/concordnow/tinymce-ember/compare/v1.2.1...v2.0.0
[1.2.1]: https://github.com/concordnow/tinymce-ember/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/concordnow/tinymce-ember/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/concordnow/tinymce-ember/releases/tag/v1.1.0

[unreleased]: https://github.com/concordnow/tinymce-ember/compare/v4.1.0-0...HEAD
