var get = Ember.get;

/**
  `EmberLeaflet.BoundsMixin` provides the ability to get a collection's
  bounds by its locations property.
 
  @class BoundsMixin
  @namespace EmberLeaflet
  @extends Ember.Mixin
*/
EmberLeaflet.BoundsMixin = Ember.Mixin.create({

  /** Calculate bounds, or if object is already a bounds, return it. */
  bounds: Ember.computed(function() {
    var locations = get(this, 'locations');
    if (locations instanceof L.LatLngBounds) { return locations; }
    if(!locations || !get(locations, 'length')) { return null; }
    return L.latLngBounds(locations);
  }).property('locations').volatile()
});
