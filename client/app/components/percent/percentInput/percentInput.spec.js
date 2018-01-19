import PercentInputModule from './percentInput'
import PercentInputController from './percentInput.controller';
import PercentInputComponent from './percentInput.component';
import PercentInputTemplate from './percentInput.html';

describe('PercentInput', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PercentInputModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PercentInputController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PercentInputTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PercentInputComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PercentInputTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PercentInputController);
      });
  });
});
