import DiceModule from './dice'
import DiceController from './dice.controller';
import DiceComponent from './dice.component';
import DiceTemplate from './dice.html';

describe('Dice', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DiceModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DiceController();
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
      expect(DiceTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DiceComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DiceTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DiceController);
      });
  });
});
