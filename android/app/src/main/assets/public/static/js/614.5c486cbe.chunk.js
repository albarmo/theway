"use strict";(self.webpackChunktheway=self.webpackChunktheway||[]).push([[614],{5614:function(t,e,i){i.r(e),i.d(e,{DEFAULT_ID:function(){return a},Loader:function(){return l},LoaderStatus:function(){return r}});var r,n=i(5671),s=i(3144),o=function t(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var r,n,s;if(Array.isArray(e)){if((r=e.length)!=i.length)return!1;for(n=r;0!==n--;)if(!t(e[n],i[n]))return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((r=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(n=r;0!==n--;)if(!Object.prototype.hasOwnProperty.call(i,s[n]))return!1;for(n=r;0!==n--;){var o=s[n];if(!t(e[o],i[o]))return!1}return!0}return e!==e&&i!==i},a="__googleMapsScriptId";!function(t){t[t.INITIALIZED=0]="INITIALIZED",t[t.LOADING=1]="LOADING",t[t.SUCCESS=2]="SUCCESS",t[t.FAILURE=3]="FAILURE"}(r||(r={}));var l=function(){function t(e){var i=e.apiKey,r=e.authReferrerPolicy,s=e.channel,l=e.client,c=e.id,h=void 0===c?a:c,u=e.language,d=e.libraries,g=void 0===d?[]:d,f=e.mapIds,p=e.nonce,y=e.region,v=e.retries,k=void 0===v?3:v,b=e.url,m=void 0===b?"https://maps.googleapis.com/maps/api/js":b,I=e.version;if((0,n.Z)(this,t),this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=i,this.authReferrerPolicy=r,this.channel=s,this.client=l,this.id=h||a,this.language=u,this.libraries=g,this.mapIds=f,this.nonce=p,this.region=y,this.retries=k,this.url=m,this.version=I,t.instance){if(!o(this.options,t.instance.options))throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options)," !== ").concat(JSON.stringify(t.instance.options)));return t.instance}t.instance=this}return(0,s.Z)(t,[{key:"options",get:function(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}},{key:"status",get:function(){return this.errors.length?r.FAILURE:this.done?r.SUCCESS:this.loading?r.LOADING:r.INITIALIZED}},{key:"failed",get:function(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}},{key:"createUrl",value:function(){var t=this.url;return t+="?callback=".concat(this.CALLBACK),this.apiKey&&(t+="&key=".concat(this.apiKey)),this.channel&&(t+="&channel=".concat(this.channel)),this.client&&(t+="&client=".concat(this.client)),this.libraries.length>0&&(t+="&libraries=".concat(this.libraries.join(","))),this.language&&(t+="&language=".concat(this.language)),this.region&&(t+="&region=".concat(this.region)),this.version&&(t+="&v=".concat(this.version)),this.mapIds&&(t+="&map_ids=".concat(this.mapIds.join(","))),this.authReferrerPolicy&&(t+="&auth_referrer_policy=".concat(this.authReferrerPolicy)),t}},{key:"deleteScript",value:function(){var t=document.getElementById(this.id);t&&t.remove()}},{key:"load",value:function(){return this.loadPromise()}},{key:"loadPromise",value:function(){var t=this;return new Promise((function(e,i){t.loadCallback((function(t){t?i(t.error):e(window.google)}))}))}},{key:"loadCallback",value:function(t){this.callbacks.push(t),this.execute()}},{key:"setScript",value:function(){if(document.getElementById(this.id))this.callback();else{var t=this.createUrl(),e=document.createElement("script");e.id=this.id,e.type="text/javascript",e.src=t,e.onerror=this.loadErrorCallback.bind(this),e.defer=!0,e.async=!0,this.nonce&&(e.nonce=this.nonce),document.head.appendChild(e)}}},{key:"reset",value:function(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}},{key:"resetIfRetryingFailed",value:function(){this.failed&&this.reset()}},{key:"loadErrorCallback",value:function(t){var e=this;if(this.errors.push(t),this.errors.length<=this.retries){var i=this.errors.length*Math.pow(2,this.errors.length);console.log("Failed to load Google Maps script, retrying in ".concat(i," ms.")),setTimeout((function(){e.deleteScript(),e.setScript()}),i)}else this.onerrorEvent=t,this.callback()}},{key:"setCallback",value:function(){window.__googleMapsCallback=this.callback.bind(this)}},{key:"callback",value:function(){var t=this;this.done=!0,this.loading=!1,this.callbacks.forEach((function(e){e(t.onerrorEvent)})),this.callbacks=[]}},{key:"execute",value:function(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}]),t}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLVyxTQUFVLEVBQ2ZYLEtBQUtPLE9BQVMsR0FDZFAsS0FBSzhDLGFBQWUsSSxHQUNyQixtQ0FFTyxXQUNGOUMsS0FBSytDLFFBQ1AvQyxLQUFLZ0QsTyxHQUVSLCtCQUVPLFNBQWtCQyxHQUFhLFdBR3JDLEdBRkFqRCxLQUFLTyxPQUFPd0IsS0FBS2tCLEdBRWJqRCxLQUFLTyxPQUFPckMsUUFBVThCLEtBQUtILFFBQVMsQ0FDdEMsSUFBTXFELEVBQVFsRCxLQUFLTyxPQUFPckMsT0FBU2lGLEtBQUFBLElBQUFBLEVBQUtuRCxLQUFLTyxPQUFPckMsUUFFcERrRixRQUFRQyxJQUFJLGtEQUFELE9BQ3lDSCxFQUFLLFNBR3pESSxZQUFXLFdBQ1QsRUFBS1QsZUFDTCxFQUFLVSxXLEdBQ0pMLEVBQ0osTUFDQ2xELEtBQUs4QyxhQUFlRyxFQUNwQmpELEtBQUtpQyxVLEdBRVIseUJBRU8sV0FDTk4sT0FBTzZCLHFCQUF1QnhELEtBQUtpQyxTQUFTTyxLQUFLeEMsSyxHQUNsRCxzQkFFTyxXQUFRLFdBQ2RBLEtBQUtTLE1BQU8sRUFDWlQsS0FBS1csU0FBVSxFQUVmWCxLQUFLOEIsVUFBVTJCLFNBQVEsU0FBQ0MsR0FDdEJBLEVBQUcsRUFBS1osYUFDVixJQUVBOUMsS0FBSzhCLFVBQVksRSxHQUNsQixxQkFFTyxXQUdOLEdBRkE5QixLQUFLMkQsd0JBRUQzRCxLQUFLUyxLQUNQVCxLQUFLaUMsZUFDQSxDQUVMLEdBQUlOLE9BQU9DLFFBQVVELE9BQU9DLE9BQU9nQyxNQUFRakMsT0FBT0MsT0FBT2dDLEtBQUs3RCxRQU01RCxPQUxBcUQsUUFBUVMsS0FDTiw2SkFHRjdELEtBQUtpQyxXQUlIakMsS0FBS1csVUFHUFgsS0FBS1csU0FBVSxFQUNmWCxLQUFLOEQsY0FDTDlELEtBQUt1RCxZQUVSLEMsS0FDRixFQXhWZ0IsRSIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0Bnb29nbGVtYXBzL2pzLWFwaS1sb2FkZXIvc3JjL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0Bnb29nbGVtYXBzL2pzLWFwaS1sb2FkZXIvbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdC5cbiAqXG4gKiAgICAgIEh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBpc0VxdWFsIGZyb20gXCJmYXN0LWRlZXAtZXF1YWxcIjtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19nb29nbGVNYXBzQ2FsbGJhY2s6IChlOiBFdmVudCkgPT4gdm9pZDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9JRCA9IFwiX19nb29nbGVNYXBzU2NyaXB0SWRcIjtcblxuZXhwb3J0IHR5cGUgTGlicmFyaWVzID0gKFxuICB8IFwiZHJhd2luZ1wiXG4gIHwgXCJnZW9tZXRyeVwiXG4gIHwgXCJsb2NhbENvbnRleHRcIlxuICB8IFwibWFya2VyXCJcbiAgfCBcInBsYWNlc1wiXG4gIHwgXCJ2aXN1YWxpemF0aW9uXCJcbilbXTtcblxuLyoqXG4gKiBUaGUgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUElcbiAqIFtkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC90dXRvcmlhbClcbiAqIGlzIHRoZSBhdXRob3JpdGF0aXZlIHNvdXJjZSBmb3IgW1tMb2FkZXJPcHRpb25zXV0uXG4vKipcbiAqIExvYWRlciBvcHRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZ2V0LWFwaS1rZXkuXG4gICAqL1xuICBhcGlLZXk6IHN0cmluZztcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL3ByZW1pdW0vb3ZlcnZpZXcuXG4gICAqL1xuICBjaGFubmVsPzogc3RyaW5nO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvcHJlbWl1bS9vdmVydmlldywgdXNlIGBhcGlLZXlgIGluc3RlYWQuXG4gICAqL1xuICBjbGllbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbiB5b3VyIGFwcGxpY2F0aW9uIHlvdSBjYW4gc3BlY2lmeSByZWxlYXNlIGNoYW5uZWxzIG9yIHZlcnNpb24gbnVtYmVyczpcbiAgICpcbiAgICogVGhlIHdlZWtseSB2ZXJzaW9uIGlzIHNwZWNpZmllZCB3aXRoIGB2ZXJzaW9uPXdlZWtseWAuIFRoaXMgdmVyc2lvbiBpc1xuICAgKiB1cGRhdGVkIG9uY2UgcGVyIHdlZWssIGFuZCBpcyB0aGUgbW9zdCBjdXJyZW50LlxuICAgKlxuICAgKiBgYGBcbiAgICogY29uc3QgbG9hZGVyID0gTG9hZGVyKHthcGlLZXksIHZlcnNpb246ICd3ZWVrbHknfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBUaGUgcXVhcnRlcmx5IHZlcnNpb24gaXMgc3BlY2lmaWVkIHdpdGggYHZlcnNpb249cXVhcnRlcmx5YC4gVGhpcyB2ZXJzaW9uXG4gICAqIGlzIHVwZGF0ZWQgb25jZSBwZXIgcXVhcnRlciwgYW5kIGlzIHRoZSBtb3N0IHByZWRpY3RhYmxlLlxuICAgKlxuICAgKiBgYGBcbiAgICogY29uc3QgbG9hZGVyID0gTG9hZGVyKHthcGlLZXksIHZlcnNpb246ICdxdWFydGVybHknfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBUaGUgdmVyc2lvbiBudW1iZXIgaXMgc3BlY2lmaWVkIHdpdGggYHZlcnNpb249bi5ubmAuIFlvdSBjYW4gY2hvb3NlXG4gICAqIGB2ZXJzaW9uPTMuNDBgLCBgdmVyc2lvbj0zLjM5YCwgb3IgYHZlcnNpb249My4zOGAuIFZlcnNpb24gbnVtYmVycyBhcmVcbiAgICogdXBkYXRlZCBvbmNlIHBlciBxdWFydGVyLlxuICAgKlxuICAgKiBgYGBcbiAgICogY29uc3QgbG9hZGVyID0gTG9hZGVyKHthcGlLZXksIHZlcnNpb246ICczLjQwJ30pO1xuICAgKiBgYGBcbiAgICpcbiAgICogSWYgeW91IGRvIG5vdCBleHBsaWNpdGx5IHNwZWNpZnkgYSB2ZXJzaW9uLCB5b3Ugd2lsbCByZWNlaXZlIHRoZVxuICAgKiB3ZWVrbHkgdmVyc2lvbiBieSBkZWZhdWx0LlxuICAgKi9cbiAgdmVyc2lvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgc2NyaXB0IHRhZy4gQmVmb3JlIGFkZGluZyBhIG5ldyBzY3JpcHQsIHRoZSBMb2FkZXIgd2lsbCBjaGVjayBmb3IgYW4gZXhpc3Rpbmcgb25lLlxuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaGVuIGxvYWRpbmcgdGhlIE1hcHMgSmF2YVNjcmlwdCBBUEkgdmlhIHRoZSBVUkwgeW91IG1heSBvcHRpb25hbGx5IGxvYWRcbiAgICogYWRkaXRpb25hbCBsaWJyYXJpZXMgdGhyb3VnaCB1c2Ugb2YgdGhlIGxpYnJhcmllcyBVUkwgcGFyYW1ldGVyLiBMaWJyYXJpZXNcbiAgICogYXJlIG1vZHVsZXMgb2YgY29kZSB0aGF0IHByb3ZpZGUgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IHRvIHRoZSBtYWluIE1hcHNcbiAgICogSmF2YVNjcmlwdCBBUEkgYnV0IGFyZSBub3QgbG9hZGVkIHVubGVzcyB5b3Ugc3BlY2lmaWNhbGx5IHJlcXVlc3QgdGhlbS5cbiAgICpcbiAgICogYGBgXG4gICAqIGNvbnN0IGxvYWRlciA9IExvYWRlcih7XG4gICAqICBhcGlLZXksXG4gICAqICBsaWJyYXJpZXM6IFsnZHJhd2luZycsICdnZW9tZXRyeScsICdwbGFjZXMnLCAndmlzdWFsaXphdGlvbiddLFxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIFNldCB0aGUgW2xpc3Qgb2YgbGlicmFyaWVzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9saWJyYXJpZXMpIGZvciBtb3JlIG9wdGlvbnMuXG4gICAqL1xuICBsaWJyYXJpZXM/OiBMaWJyYXJpZXM7XG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgTWFwcyBKYXZhU2NyaXB0IEFQSSB1c2VzIHRoZSB1c2VyJ3MgcHJlZmVycmVkIGxhbmd1YWdlXG4gICAqIHNldHRpbmcgYXMgc3BlY2lmaWVkIGluIHRoZSBicm93c2VyLCB3aGVuIGRpc3BsYXlpbmcgdGV4dHVhbCBpbmZvcm1hdGlvblxuICAgKiBzdWNoIGFzIHRoZSBuYW1lcyBmb3IgY29udHJvbHMsIGNvcHlyaWdodCBub3RpY2VzLCBkcml2aW5nIGRpcmVjdGlvbnMgYW5kXG4gICAqIGxhYmVscyBvbiBtYXBzLiBJbiBtb3N0IGNhc2VzLCBpdCdzIHByZWZlcmFibGUgdG8gcmVzcGVjdCB0aGUgYnJvd3NlclxuICAgKiBzZXR0aW5nLiBIb3dldmVyLCBpZiB5b3Ugd2FudCB0aGUgTWFwcyBKYXZhU2NyaXB0IEFQSSB0byBpZ25vcmUgdGhlXG4gICAqIGJyb3dzZXIncyBsYW5ndWFnZSBzZXR0aW5nLCB5b3UgY2FuIGZvcmNlIGl0IHRvIGRpc3BsYXkgaW5mb3JtYXRpb24gaW4gYVxuICAgKiBwYXJ0aWN1bGFyIGxhbmd1YWdlIHdoZW4gbG9hZGluZyB0aGUgTWFwcyBKYXZhU2NyaXB0IEFQSSBjb2RlLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZyBleGFtcGxlIGxvY2FsaXplcyB0aGUgbGFuZ3VhZ2UgdG8gSmFwYW46XG4gICAqXG4gICAqIGBgYFxuICAgKiBjb25zdCBsb2FkZXIgPSBMb2FkZXIoe2FwaUtleSwgbGFuZ3VhZ2U6ICdqYScsIHJlZ2lvbjogJ0pQJ30pO1xuICAgKiBgYGBcbiAgICpcbiAgICogU2VlIHRoZSBbbGlzdCBvZiBzdXBwb3J0ZWRcbiAgICogbGFuZ3VhZ2VzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2ZhcSNsYW5ndWFnZXN1cHBvcnQpLiBOb3RlXG4gICAqIHRoYXQgbmV3IGxhbmd1YWdlcyBhcmUgYWRkZWQgb2Z0ZW4sIHNvIHRoaXMgbGlzdCBtYXkgbm90IGJlIGV4aGF1c3RpdmUuXG4gICAqXG4gICAqL1xuICBsYW5ndWFnZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFdoZW4geW91IGxvYWQgdGhlIE1hcHMgSmF2YVNjcmlwdCBBUEkgZnJvbSBtYXBzLmdvb2dsZWFwaXMuY29tIGl0IGFwcGxpZXMgYVxuICAgKiBkZWZhdWx0IGJpYXMgZm9yIGFwcGxpY2F0aW9uIGJlaGF2aW9yIHRvd2FyZHMgdGhlIFVuaXRlZCBTdGF0ZXMuIElmIHlvdVxuICAgKiB3YW50IHRvIGFsdGVyIHlvdXIgYXBwbGljYXRpb24gdG8gc2VydmUgZGlmZmVyZW50IG1hcCB0aWxlcyBvciBiaWFzIHRoZVxuICAgKiBhcHBsaWNhdGlvbiAoc3VjaCBhcyBiaWFzaW5nIGdlb2NvZGluZyByZXN1bHRzIHRvd2FyZHMgdGhlIHJlZ2lvbiksIHlvdSBjYW5cbiAgICogb3ZlcnJpZGUgdGhpcyBkZWZhdWx0IGJlaGF2aW9yIGJ5IGFkZGluZyBhIHJlZ2lvbiBwYXJhbWV0ZXIgd2hlbiBsb2FkaW5nXG4gICAqIHRoZSBNYXBzIEphdmFTY3JpcHQgQVBJIGNvZGUuXG4gICAqXG4gICAqIFRoZSByZWdpb24gcGFyYW1ldGVyIGFjY2VwdHMgVW5pY29kZSByZWdpb24gc3VidGFnIGlkZW50aWZpZXJzIHdoaWNoXG4gICAqIChnZW5lcmFsbHkpIGhhdmUgYSBvbmUtdG8tb25lIG1hcHBpbmcgdG8gY291bnRyeSBjb2RlIFRvcC1MZXZlbCBEb21haW5zXG4gICAqIChjY1RMRHMpLiBNb3N0IFVuaWNvZGUgcmVnaW9uIGlkZW50aWZpZXJzIGFyZSBpZGVudGljYWwgdG8gSVNPIDMxNjYtMVxuICAgKiBjb2Rlcywgd2l0aCBzb21lIG5vdGFibGUgZXhjZXB0aW9ucy4gRm9yIGV4YW1wbGUsIEdyZWF0IEJyaXRhaW4ncyBjY1RMRCBpc1xuICAgKiBcInVrXCIgKGNvcnJlc3BvbmRpbmcgdG8gdGhlIGRvbWFpbiAuY28udWspIHdoaWxlIGl0cyByZWdpb24gaWRlbnRpZmllciBpc1xuICAgKiBcIkdCLlwiXG4gICAqXG4gICAqIEZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nIGV4YW1wbGUgbG9jYWxpemVzIHRoZSBtYXAgdG8gdGhlIFVuaXRlZCBLaW5nZG9tOlxuICAgKlxuICAgKiBgYGBcbiAgICogY29uc3QgbG9hZGVyID0gTG9hZGVyKHthcGlLZXksIHJlZ2lvbjogJ0dCJ30pO1xuICAgKiBgYGBcbiAgICovXG4gIHJlZ2lvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFBhc3NpbmcgYG1hcElkc2AgaXMgbm8gbG9uZ2VyIHJlcXVpcmVkIGluIHRoZSBzY3JpcHQgdGFnLlxuICAgKi9cbiAgbWFwSWRzPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiBVc2UgYSBjdXN0b20gdXJsIGFuZCBwYXRoIHRvIGxvYWQgdGhlIEdvb2dsZSBNYXBzIEFQSSBzY3JpcHQuXG4gICAqL1xuICB1cmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVc2UgYSBjcnlwdG9ncmFwaGljIG5vbmNlIGF0dHJpYnV0ZS5cbiAgICovXG4gIG5vbmNlPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBzY3JpcHQgbG9hZCByZXRyaWVzLlxuICAgKi9cbiAgcmV0cmllcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIE1hcHMgSlMgY3VzdG9tZXJzIGNhbiBjb25maWd1cmUgSFRUUCBSZWZlcnJlciBSZXN0cmljdGlvbnMgaW4gdGhlIENsb3VkXG4gICAqIENvbnNvbGUgdG8gbGltaXQgd2hpY2ggVVJMcyBhcmUgYWxsb3dlZCB0byB1c2UgYSBwYXJ0aWN1bGFyIEFQSSBLZXkuIEJ5XG4gICAqIGRlZmF1bHQsIHRoZXNlIHJlc3RyaWN0aW9ucyBjYW4gYmUgY29uZmlndXJlZCB0byBhbGxvdyBvbmx5IGNlcnRhaW4gcGF0aHNcbiAgICogdG8gdXNlIGFuIEFQSSBLZXkuIElmIGFueSBVUkwgb24gdGhlIHNhbWUgZG9tYWluIG9yIG9yaWdpbiBtYXkgdXNlIHRoZSBBUElcbiAgICogS2V5LCB5b3UgY2FuIHNldCBgYXV0aF9yZWZlcnJlcl9wb2xpY3k9b3JpZ2luYCB0byBsaW1pdCB0aGUgYW1vdW50IG9mIGRhdGFcbiAgICogc2VudCB3aGVuIGF1dGhvcml6aW5nIHJlcXVlc3RzIGZyb20gdGhlIE1hcHMgSmF2YVNjcmlwdCBBUEkuIFRoaXMgaXNcbiAgICogYXZhaWxhYmxlIHN0YXJ0aW5nIGluIHZlcnNpb24gMy40Ni4gV2hlbiB0aGlzIHBhcmFtZXRlciBpcyBzcGVjaWZpZWQgYW5kXG4gICAqIEhUVFAgUmVmZXJyZXIgUmVzdHJpY3Rpb25zIGFyZSBlbmFibGVkIG9uIENsb3VkIENvbnNvbGUsIE1hcHMgSmF2YVNjcmlwdFxuICAgKiBBUEkgd2lsbCBvbmx5IGJlIGFibGUgdG8gbG9hZCBpZiB0aGVyZSBpcyBhbiBIVFRQIFJlZmVycmVyIFJlc3RyaWN0aW9uIHRoYXRcbiAgICogbWF0Y2hlcyB0aGUgY3VycmVudCB3ZWJzaXRlJ3MgZG9tYWluIHdpdGhvdXQgYSBwYXRoIHNwZWNpZmllZC5cbiAgICovXG4gIGF1dGhSZWZlcnJlclBvbGljeT86IFwib3JpZ2luXCI7XG59XG5cbi8qKlxuICogVGhlIHN0YXR1cyBvZiB0aGUgW1tMb2FkZXJdXS5cbiAqL1xuZXhwb3J0IGVudW0gTG9hZGVyU3RhdHVzIHtcbiAgSU5JVElBTElaRUQsXG4gIExPQURJTkcsXG4gIFNVQ0NFU1MsXG4gIEZBSUxVUkUsXG59XG5cbi8qKlxuICogW1tMb2FkZXJdXSBtYWtlcyBpdCBlYXNpZXIgdG8gYWRkIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIHRvIHlvdXIgYXBwbGljYXRpb25cbiAqIGR5bmFtaWNhbGx5IHVzaW5nXG4gKiBbUHJvbWlzZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb21pc2UpLlxuICogSXQgd29ya3MgYnkgZHluYW1pY2FsbHkgY3JlYXRpbmcgYW5kIGFwcGVuZGluZyBhIHNjcmlwdCBub2RlIHRvIHRoZSB0aGVcbiAqIGRvY3VtZW50IGhlYWQgYW5kIHdyYXBwaW5nIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBzbyBhcyB0byByZXR1cm4gYSBwcm9taXNlLlxuICpcbiAqIGBgYFxuICogY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcih7XG4gKiAgIGFwaUtleTogXCJcIixcbiAqICAgdmVyc2lvbjogXCJ3ZWVrbHlcIixcbiAqICAgbGlicmFyaWVzOiBbXCJwbGFjZXNcIl1cbiAqIH0pO1xuICpcbiAqIGxvYWRlci5sb2FkKCkudGhlbigoZ29vZ2xlKSA9PiB7XG4gKiAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoLi4uKVxuICogfSlcbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgTG9hZGVyIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IExvYWRlcjtcbiAgLyoqXG4gICAqIFNlZSBbW0xvYWRlck9wdGlvbnMudmVyc2lvbl1dXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIFtbTG9hZGVyT3B0aW9ucy5hcGlLZXldXVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGFwaUtleTogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIFtbTG9hZGVyT3B0aW9ucy5jaGFubmVsXV1cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBjaGFubmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZWUgW1tMb2FkZXJPcHRpb25zLmNsaWVudF1dXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgY2xpZW50OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZWUgW1tMb2FkZXJPcHRpb25zLmlkXV1cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIFtbTG9hZGVyT3B0aW9ucy5saWJyYXJpZXNdXVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGxpYnJhcmllczogTGlicmFyaWVzO1xuICAvKipcbiAgICogU2VlIFtbTG9hZGVyT3B0aW9ucy5sYW5ndWFnZV1dXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogU2VlIFtbTG9hZGVyT3B0aW9ucy5yZWdpb25dXVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHJlZ2lvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZWUgW1tMb2FkZXJPcHRpb25zLm1hcElkc11dXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbWFwSWRzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogU2VlIFtbTG9hZGVyT3B0aW9ucy5ub25jZV1dXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbm9uY2U6IHN0cmluZyB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFNlZSBbW0xvYWRlck9wdGlvbnMucmV0cmllc11dXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgcmV0cmllczogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZWUgW1tMb2FkZXJPcHRpb25zLnVybF1dXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZWUgW1tMb2FkZXJPcHRpb25zLmF1dGhSZWZlcnJlclBvbGljeV1dXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0aFJlZmVycmVyUG9saWN5OiBcIm9yaWdpblwiO1xuXG4gIHByaXZhdGUgQ0FMTEJBQ0sgPSBcIl9fZ29vZ2xlTWFwc0NhbGxiYWNrXCI7XG4gIHByaXZhdGUgY2FsbGJhY2tzOiAoKGU6IEVycm9yRXZlbnQpID0+IHZvaWQpW10gPSBbXTtcbiAgcHJpdmF0ZSBkb25lID0gZmFsc2U7XG4gIHByaXZhdGUgbG9hZGluZyA9IGZhbHNlO1xuICBwcml2YXRlIG9uZXJyb3JFdmVudDogRXJyb3JFdmVudDtcbiAgcHJpdmF0ZSBlcnJvcnM6IEVycm9yRXZlbnRbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIExvYWRlciB1c2luZyBbW0xvYWRlck9wdGlvbnNdXS4gTm8gZGVmYXVsdHMgYXJlIHNldFxuICAgKiB1c2luZyB0aGlzIGxpYnJhcnksIGluc3RlYWQgdGhlIGRlZmF1bHRzIGFyZSBzZXQgYnkgdGhlIEdvb2dsZSBNYXBzXG4gICAqIEphdmFTY3JpcHQgQVBJIHNlcnZlci5cbiAgICpcbiAgICogYGBgXG4gICAqIGNvbnN0IGxvYWRlciA9IExvYWRlcih7YXBpS2V5LCB2ZXJzaW9uOiAnd2Vla2x5JywgbGlicmFyaWVzOiBbJ3BsYWNlcyddfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgY29uc3RydWN0b3Ioe1xuICAgIGFwaUtleSxcbiAgICBhdXRoUmVmZXJyZXJQb2xpY3ksXG4gICAgY2hhbm5lbCxcbiAgICBjbGllbnQsXG4gICAgaWQgPSBERUZBVUxUX0lELFxuICAgIGxhbmd1YWdlLFxuICAgIGxpYnJhcmllcyA9IFtdLFxuICAgIG1hcElkcyxcbiAgICBub25jZSxcbiAgICByZWdpb24sXG4gICAgcmV0cmllcyA9IDMsXG4gICAgdXJsID0gXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanNcIixcbiAgICB2ZXJzaW9uLFxuICB9OiBMb2FkZXJPcHRpb25zKSB7XG4gICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG4gICAgdGhpcy5hdXRoUmVmZXJyZXJQb2xpY3kgPSBhdXRoUmVmZXJyZXJQb2xpY3k7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmlkID0gaWQgfHwgREVGQVVMVF9JRDsgLy8gRG8gbm90IGFsbG93IGVtcHR5IHN0cmluZ1xuICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICB0aGlzLmxpYnJhcmllcyA9IGxpYnJhcmllcztcbiAgICB0aGlzLm1hcElkcyA9IG1hcElkcztcbiAgICB0aGlzLm5vbmNlID0gbm9uY2U7XG4gICAgdGhpcy5yZWdpb24gPSByZWdpb247XG4gICAgdGhpcy5yZXRyaWVzID0gcmV0cmllcztcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXG4gICAgaWYgKExvYWRlci5pbnN0YW5jZSkge1xuICAgICAgaWYgKCFpc0VxdWFsKHRoaXMub3B0aW9ucywgTG9hZGVyLmluc3RhbmNlLm9wdGlvbnMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgTG9hZGVyIG11c3Qgbm90IGJlIGNhbGxlZCBhZ2FpbiB3aXRoIGRpZmZlcmVudCBvcHRpb25zLiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgICAgKX0gIT09ICR7SlNPTi5zdHJpbmdpZnkoTG9hZGVyLmluc3RhbmNlLm9wdGlvbnMpfWBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIExvYWRlci5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBMb2FkZXIuaW5zdGFuY2UgPSB0aGlzO1xuICB9XG5cbiAgcHVibGljIGdldCBvcHRpb25zKCk6IExvYWRlck9wdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJzaW9uOiB0aGlzLnZlcnNpb24sXG4gICAgICBhcGlLZXk6IHRoaXMuYXBpS2V5LFxuICAgICAgY2hhbm5lbDogdGhpcy5jaGFubmVsLFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgbGlicmFyaWVzOiB0aGlzLmxpYnJhcmllcyxcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgcmVnaW9uOiB0aGlzLnJlZ2lvbixcbiAgICAgIG1hcElkczogdGhpcy5tYXBJZHMsXG4gICAgICBub25jZTogdGhpcy5ub25jZSxcbiAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICBhdXRoUmVmZXJyZXJQb2xpY3k6IHRoaXMuYXV0aFJlZmVycmVyUG9saWN5LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YXR1cygpOiBMb2FkZXJTdGF0dXMge1xuICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBMb2FkZXJTdGF0dXMuRkFJTFVSRTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgcmV0dXJuIExvYWRlclN0YXR1cy5TVUNDRVNTO1xuICAgIH1cbiAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gTG9hZGVyU3RhdHVzLkxPQURJTkc7XG4gICAgfVxuICAgIHJldHVybiBMb2FkZXJTdGF0dXMuSU5JVElBTElaRUQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBmYWlsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZG9uZSAmJiAhdGhpcy5sb2FkaW5nICYmIHRoaXMuZXJyb3JzLmxlbmd0aCA+PSB0aGlzLnJldHJpZXMgKyAxO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZVVybCByZXR1cm5zIHRoZSBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSBzY3JpcHQgdXJsIGdpdmVuIHRoZSBbW0xvYWRlck9wdGlvbnNdXS5cbiAgICpcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVVybCgpOiBzdHJpbmcge1xuICAgIGxldCB1cmwgPSB0aGlzLnVybDtcblxuICAgIHVybCArPSBgP2NhbGxiYWNrPSR7dGhpcy5DQUxMQkFDS31gO1xuXG4gICAgaWYgKHRoaXMuYXBpS2V5KSB7XG4gICAgICB1cmwgKz0gYCZrZXk9JHt0aGlzLmFwaUtleX1gO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNoYW5uZWwpIHtcbiAgICAgIHVybCArPSBgJmNoYW5uZWw9JHt0aGlzLmNoYW5uZWx9YDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jbGllbnQpIHtcbiAgICAgIHVybCArPSBgJmNsaWVudD0ke3RoaXMuY2xpZW50fWA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGlicmFyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHVybCArPSBgJmxpYnJhcmllcz0ke3RoaXMubGlicmFyaWVzLmpvaW4oXCIsXCIpfWA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFuZ3VhZ2UpIHtcbiAgICAgIHVybCArPSBgJmxhbmd1YWdlPSR7dGhpcy5sYW5ndWFnZX1gO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlZ2lvbikge1xuICAgICAgdXJsICs9IGAmcmVnaW9uPSR7dGhpcy5yZWdpb259YDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52ZXJzaW9uKSB7XG4gICAgICB1cmwgKz0gYCZ2PSR7dGhpcy52ZXJzaW9ufWA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWFwSWRzKSB7XG4gICAgICB1cmwgKz0gYCZtYXBfaWRzPSR7dGhpcy5tYXBJZHMuam9pbihcIixcIil9YDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdXRoUmVmZXJyZXJQb2xpY3kpIHtcbiAgICAgIHVybCArPSBgJmF1dGhfcmVmZXJyZXJfcG9saWN5PSR7dGhpcy5hdXRoUmVmZXJyZXJQb2xpY3l9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZVNjcmlwdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICBpZiAoc2NyaXB0KSB7XG4gICAgICBzY3JpcHQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIHNjcmlwdCBhbmQgcmV0dXJuIGEgUHJvbWlzZS5cbiAgICovXG4gIHB1YmxpYyBsb2FkKCk6IFByb21pc2U8dHlwZW9mIGdvb2dsZT4ge1xuICAgIHJldHVybiB0aGlzLmxvYWRQcm9taXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgc2NyaXB0IGFuZCByZXR1cm4gYSBQcm9taXNlLlxuICAgKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwdWJsaWMgbG9hZFByb21pc2UoKTogUHJvbWlzZTx0eXBlb2YgZ29vZ2xlPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMubG9hZENhbGxiYWNrKChlcnI6IEVycm9yRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICByZXNvbHZlKHdpbmRvdy5nb29nbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChlcnIuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSBzY3JpcHQgd2l0aCBhIGNhbGxiYWNrLlxuICAgKi9cbiAgcHVibGljIGxvYWRDYWxsYmFjayhmbjogKGU6IEVycm9yRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB0aGlzLmV4ZWN1dGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHNjcmlwdCBvbiBkb2N1bWVudC5cbiAgICovXG4gIHByaXZhdGUgc2V0U2NyaXB0KCk6IHZvaWQge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSkge1xuICAgICAgLy8gVE9ETyB3cmFwIG9uZXJyb3IgY2FsbGJhY2sgZm9yIGNhc2VzIHdoZXJlIHRoZSBzY3JpcHQgd2FzIGxvYWRlZCBlbHNld2hlcmVcbiAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLmNyZWF0ZVVybCgpO1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgc2NyaXB0LmlkID0gdGhpcy5pZDtcbiAgICBzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICBzY3JpcHQub25lcnJvciA9IHRoaXMubG9hZEVycm9yQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5ub25jZSkge1xuICAgICAgc2NyaXB0Lm5vbmNlID0gdGhpcy5ub25jZTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGxvYWRlciBzdGF0ZS5cbiAgICovXG4gIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5kZWxldGVTY3JpcHQoKTtcbiAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIHRoaXMub25lcnJvckV2ZW50ID0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRJZlJldHJ5aW5nRmFpbGVkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZhaWxlZCkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZEVycm9yQ2FsbGJhY2soZTogRXJyb3JFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3JzLnB1c2goZSk7XG5cbiAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoIDw9IHRoaXMucmV0cmllcykge1xuICAgICAgY29uc3QgZGVsYXkgPSB0aGlzLmVycm9ycy5sZW5ndGggKiAyICoqIHRoaXMuZXJyb3JzLmxlbmd0aDtcblxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBGYWlsZWQgdG8gbG9hZCBHb29nbGUgTWFwcyBzY3JpcHQsIHJldHJ5aW5nIGluICR7ZGVsYXl9IG1zLmBcbiAgICAgICk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGV0ZVNjcmlwdCgpO1xuICAgICAgICB0aGlzLnNldFNjcmlwdCgpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uZXJyb3JFdmVudCA9IGU7XG4gICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICB3aW5kb3cuX19nb29nbGVNYXBzQ2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBwcml2YXRlIGNhbGxiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgY2IodGhpcy5vbmVycm9yRXZlbnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0SWZSZXRyeWluZ0ZhaWxlZCgpO1xuXG4gICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaG9ydCBjaXJjdWl0IGFuZCB3YXJuIGlmIGdvb2dsZS5tYXBzIGlzIGFscmVhZHkgbG9hZGVkXG4gICAgICBpZiAod2luZG93Lmdvb2dsZSAmJiB3aW5kb3cuZ29vZ2xlLm1hcHMgJiYgd2luZG93Lmdvb2dsZS5tYXBzLnZlcnNpb24pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiR29vZ2xlIE1hcHMgYWxyZWFkeSBsb2FkZWQgb3V0c2lkZSBAZ29vZ2xlbWFwcy9qcy1hcGktbG9hZGVyLlwiICtcbiAgICAgICAgICAgIFwiVGhpcyBtYXkgcmVzdWx0IGluIHVuZGVzaXJhYmxlIGJlaGF2aW9yIGFzIG9wdGlvbnMgYW5kIHNjcmlwdCBwYXJhbWV0ZXJzIG1heSBub3QgbWF0Y2guXCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZyBidXQgd2FpdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnNldFNjcmlwdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBkbyBub3QgZWRpdCAuanMgZmlsZXMgZGlyZWN0bHkgLSBlZGl0IHNyYy9pbmRleC5qc3RcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdHJ1ZSBpZiBib3RoIE5hTiwgZmFsc2Ugb3RoZXJ3aXNlXG4gIHJldHVybiBhIT09YSAmJiBiIT09Yjtcbn07XG4iXSwibmFtZXMiOlsiTG9hZGVyU3RhdHVzIiwiZXF1YWwiLCJhIiwiYiIsImNvbnN0cnVjdG9yIiwibGVuZ3RoIiwiaSIsImtleXMiLCJBcnJheSIsImlzQXJyYXkiLCJSZWdFeHAiLCJzb3VyY2UiLCJmbGFncyIsInZhbHVlT2YiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImtleSIsIkRFRkFVTFRfSUQiLCJMb2FkZXIiLCJhcGlLZXkiLCJhdXRoUmVmZXJyZXJQb2xpY3kiLCJjaGFubmVsIiwiY2xpZW50IiwiaWQiLCJsYW5ndWFnZSIsImxpYnJhcmllcyIsIm1hcElkcyIsIm5vbmNlIiwicmVnaW9uIiwicmV0cmllcyIsInVybCIsInZlcnNpb24iLCJ0aGlzIiwiaW5zdGFuY2UiLCJpc0VxdWFsIiwib3B0aW9ucyIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9ycyIsIkZBSUxVUkUiLCJkb25lIiwiU1VDQ0VTUyIsImxvYWRpbmciLCJMT0FESU5HIiwiSU5JVElBTElaRUQiLCJDQUxMQkFDSyIsImpvaW4iLCJzY3JpcHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwibG9hZFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvYWRDYWxsYmFjayIsImVyciIsImVycm9yIiwid2luZG93IiwiZ29vZ2xlIiwiZm4iLCJjYWxsYmFja3MiLCJwdXNoIiwiZXhlY3V0ZSIsImNhbGxiYWNrIiwiY3JlYXRlVXJsIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJzcmMiLCJvbmVycm9yIiwibG9hZEVycm9yQ2FsbGJhY2siLCJiaW5kIiwiZGVmZXIiLCJhc3luYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImRlbGV0ZVNjcmlwdCIsIm9uZXJyb3JFdmVudCIsImZhaWxlZCIsInJlc2V0IiwiZSIsImRlbGF5IiwiTWF0aCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0Iiwic2V0U2NyaXB0IiwiX19nb29nbGVNYXBzQ2FsbGJhY2siLCJmb3JFYWNoIiwiY2IiLCJyZXNldElmUmV0cnlpbmdGYWlsZWQiLCJtYXBzIiwid2FybiIsInNldENhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==