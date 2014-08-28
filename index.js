/* Copyright (c) 4D, 2012-2014
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

exports.handleMessage = function handleMessage(message)
{
    var vers = studio.mainProductVersion;

    var goodVers = vers >= 9 || vers == 0;

    if (message.action == 'openConsole') {
        if (goodVers) {
            studio.extension.openPageInTab('index.html', 'Console', true);
        }
        else {
            studio.alert("The Console extension currently only works with Wakanda version 9.");
        }
    }
    else if (message.action == 'initConsole') {
        if (goodVers) {
            studio.extension.registerTabPage('index.html', 'tabIcon.png', 'Console: displays messages sent by console.log() in JS code.');
        }
    }
}

