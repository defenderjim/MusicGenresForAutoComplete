/*jslint  browser: true, white: true, plusplus: true */
/*global $, countries */

$(function () {
    'use strict';

    var genresArray = $.map(genres, function (value, key) { return { value: value, data: key }; });

/*
    // Setup jQuery ajax mock:
    $.mockjax({
        url: '*',
        responseTime: 2000,
        response: function (settings) {
            var query = settings.data.query,
                queryLowerCase = query.toLowerCase(),
                re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi'),
                suggestions = $.grep(countriesArray, function (country) {
                     // return country.value.toLowerCase().indexOf(queryLowerCase) === 0;
                    return re.test(country.value);
                }),
                response = {
                    query: query,
                    suggestions: suggestions
                };

            this.responseText = JSON.stringify(response);
        }
    });


    // Initialize ajax autocomplete:
    $('#autocomplete-ajax').autocomplete({
        // serviceUrl: '/autosuggest/service/url',
        lookup: genresArray,
        lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
            var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
            return re.test(suggestion.value);
        },
        onSelect: function(suggestion) {
            $('#selction-ajax').html('You selected: ' + suggestion.value + ', ' + suggestion.data);
        },
        onHint: function (hint) {
            $('#autocomplete-ajax-x').val(hint);
        },
        onInvalidateSelection: function() {
            $('#selction-ajax').html('You selected: none');
        }
    });
*/

    // Initialize autocomplete with local lookup:
     // Your Code

    $('.autocomplete').devbridgeAutocomplete({
        lookup: genres,
        minChars: 1,
        onSelect: function (suggestion) {
            $('.selection').html('You selected: ' + suggestion.value + ', ' + suggestion.data.category);
        },
        showNoSuggestionNotice: true,
        noSuggestionNotice: 'Sorry, no matching results',
        groupBy: 'category'
    }) ;
    
    // Initialize autocomplete with custom appendTo:
    $('#autocomplete-custom-append').autocomplete({
        lookup: genresArray,
        appendTo: '#suggestions-container'
    });

    // Initialize autocomplete with custom appendTo:
    $('#autocomplete-dynamic').autocomplete({
        lookup: genresArray
    });


});
