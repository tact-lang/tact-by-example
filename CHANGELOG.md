# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Original goal is followed [Tact Compiler Changelog](https://github.com/tact-lang/tact/tree/main), and keep this project in sync. Enjoy! ❤️❤️❤️

## [0.4.0] - 2023-09-29

### Changed

- Turn `src/routes/(examples)/00-hello-world` from 01 to 00.
- Optimzed `src/routes/(examples)/06-communicating-children/contract.tact` code in dump log.
- Optimzed `src/routes/(examples)/06-authenticating-children/contract.tact` code in dump log.
- Change the name of `06-communicating-children` to `06-communicating-subcontract`.

### Added

- Added `😃, 😑` in dump log in `src/routes/(examples)/06-authenticating-children` for better understanding.
- `require(sender() == parent, "not the parent");` in `src/routes/(examples)/06-authenticating-children/contract.tact` file.

## [0.3.0] - 2023-09-27

### Added

- Emoji support in terminal log. (📝, 🔍, 📤)

### Changed

- Optimized `src/routes/(examples)/06-unbounded-arrays/content.md` text and add the callout blocks.
- Fixed some type errors in the `src/routes/(examples)/06-unbounded-arrays/content.md` file.
- Fixed the text typo in the terminal log.

## [0.2.0] - 2023-09-08

### Added

- The first version of ChangeLog.md

## [0.1.0] - 2023-09-01

### Fixed

- Update the compiler version in the package.json
- Fix the `reply` syntax to the `self.reply`.
