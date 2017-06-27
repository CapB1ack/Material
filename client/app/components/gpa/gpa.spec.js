import GpaModule from './gpa'
import GpaController from './gpa.controller';
import GpaComponent from './gpa.component';
import GpaTemplate from './gpa.html';

describe('Gpa', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GpaModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GpaController();
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
      expect(GpaTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GpaComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GpaTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GpaController);
      });
  });
});
