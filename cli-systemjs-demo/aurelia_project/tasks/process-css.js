import {build} from 'aurelia-cli';
import gulp from 'gulp';
import project from '../aurelia.json';

export default function processCSS() {
  return gulp.src(project.cssProcessor.source, {sourcemaps: true, since: gulp.lastRun(processCSS)})
    .pipe(build.bundle());
}

