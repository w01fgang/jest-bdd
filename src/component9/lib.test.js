import Yadda from 'yadda';
import library from './lib';

const yadda = Yadda.createInstance(library);

Yadda.plugins.mocha.StepLevelPlugin.init();

new Yadda.FeatureFileSearch('./src/component9/features').each(function(file) {
  featureFile(file, function(feature) {
    scenarios(feature.scenarios, function(scenario) {
      steps(scenario.steps, function(step, done) {
        yadda.run(step, (err, result) => {
          if (err) throw err // expect(err).toBeNull()
          done()
        });
      });
    });
  });
});
