'use strict';
(function() {
  window.mockSaveAs = jasmine.createSpy('saveAs');
  window.saveAs = window.mockSaveAs;
}());
