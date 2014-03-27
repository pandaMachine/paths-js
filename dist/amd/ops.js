(function() {
  define([], function() {
    var average, enhance, length, max, min, minus, on_circle, plus, sum, sum_vectors, times;
    sum = function(xs) {
      return xs.reduce((function(a, b) {
        return a + b;
      }), 0);
    };
    min = function(xs) {
      return xs.reduce(function(a, b) {
        return Math.min(a, b);
      });
    };
    max = function(xs) {
      return xs.reduce(function(a, b) {
        return Math.max(a, b);
      });
    };
    plus = function(_arg, _arg1) {
      var a, b, c, d;
      a = _arg[0], b = _arg[1];
      c = _arg1[0], d = _arg1[1];
      return [a + c, b + d];
    };
    minus = function(_arg, _arg1) {
      var a, b, c, d;
      a = _arg[0], b = _arg[1];
      c = _arg1[0], d = _arg1[1];
      return [a - c, b - d];
    };
    times = function(k, _arg) {
      var a, b;
      a = _arg[0], b = _arg[1];
      return [k * a, k * b];
    };
    length = function(_arg) {
      var a, b;
      a = _arg[0], b = _arg[1];
      return Math.sqrt(a * a + b * b);
    };
    sum_vectors = function(xs) {
      return xs.reduce((function(v, w) {
        return plus(v, w);
      }), [0, 0]);
    };
    average = function(points) {
      return times(1 / points.length, points.reduce(plus));
    };
    on_circle = function(r, angle) {
      return times(r, [Math.sin(angle), -Math.cos(angle)]);
    };
    enhance = function(compute, curve) {
      var key, method, _ref;
      _ref = compute || {};
      for (key in _ref) {
        method = _ref[key];
        curve[key] = method(curve.index, curve.item);
      }
      return curve;
    };
    return {
      sum: sum,
      min: min,
      max: max,
      plus: plus,
      minus: minus,
      times: times,
      length: length,
      sum_vectors: sum_vectors,
      average: average,
      on_circle: on_circle,
      enhance: enhance
    };
  });

}).call(this);
