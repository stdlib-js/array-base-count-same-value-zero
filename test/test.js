/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Complex128Array = require( '@stdlib/array-complex128' );
var BooleanArray = require( '@stdlib/array-bool' );
var Int32Array = require( '@stdlib/array-int32' );
var Float32Array = require( '@stdlib/array-float32' );
var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
var countSameValueZero = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof countSameValueZero, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function counts the number of same values (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 0, 1, 0, 1, 2 ];
	expected = 2;
	actual = countSameValueZero( x, 1 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function considers positive and negative zeros to be identical (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 0.0, -0.0, 0.0, -0.0, 0.0, NaN, 1.0 ];
	expected = 5;
	actual = countSameValueZero( x, 0.0 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function considers all NaN values to be identical (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ NaN, 0.0, NaN, 2.0, NaN, 9.0, NaN ];
	expected = 4;
	actual = countSameValueZero( x, NaN );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of same values (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = toAccessorArray( [ 0, 1, 0, 1, 2 ] );
	expected = 2;
	actual = countSameValueZero( x, 1 );
	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function considers positive and negative zeros to be identical (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = toAccessorArray( [ 0.0, -0.0, 0.0, -0.0, 0.0, NaN, 1.0 ] );
	expected = 5;
	actual = countSameValueZero( x, 0.0 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function considers all NaN values to be identical (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = toAccessorArray( [ NaN, 0.0, NaN, 2.0, NaN, 9.0, NaN ] );
	expected = 4;
	actual = countSameValueZero( x, NaN );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of same values (real typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Int32Array( [ 0, 1, 0, 1, 2 ] );
	expected = 2;
	actual = countSameValueZero( x, 1 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function considers positive and negative zeros to be identical (real typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float32Array( [ 0.0, -0.0, 0.0, -0.0, 0.0, NaN, 1.0 ] );
	expected = 5;
	actual = countSameValueZero( x, 0.0 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function considers all NaN values to be identical (real typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float32Array( [ NaN, 0.0, NaN, 2.0, NaN, 9.0, NaN ] );
	expected = 4;
	actual = countSameValueZero( x, NaN );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of same values (boolean array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new BooleanArray( [ true, false, true, false, true ] );
	expected = 3;
	actual = countSameValueZero( x, true );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [ true, false, true, false, true ] );
	expected = 2;
	actual = countSameValueZero( x, false );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [ true, false, true, false, true ] );
	expected = 0;
	actual = countSameValueZero( x, 'beep' );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of same values (complex typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex128Array( [ 0.0, 0.0, 1.0, 0.0, 3.0, 4.0, 0.0, 5.0 ] );
	expected = 1;
	actual = countSameValueZero( x, new Complex128( 3.0, 4.0 ) );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 0.0, 1.0, 0.0, 3.0, 4.0, 0.0, 5.0 ] );
	expected = 0;
	actual = countSameValueZero( x, 0.0 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function considers positive and negative zeros to be identical (complex typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex128Array( [ 0.0, -0.0, 0.0, -0.0, 0.0, 0.0, -0.0, -0.0, -0.0, 0.0 ] ); // eslint-disable-line max-len
	expected = 5;
	actual = countSameValueZero( x, new Complex128( 0.0, -0.0 ) );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function considers all NaN values to be identical (complex typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex128Array( [ NaN, NaN, NaN, 2.0, NaN, 9.0, NaN, NaN ] );
	expected = 2;
	actual = countSameValueZero( x, new Complex128( NaN, NaN ) );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});
